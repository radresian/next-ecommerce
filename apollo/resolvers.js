import { AuthenticationError, UserInputError } from 'apollo-server-micro';
import { createUser, findUser, findUserByWallet, validatePassword, updateUser } from '../lib/user';
import { listCategories } from '../lib/category';
import {
  listProducts,
  findProduct,
  CreateProduct,
  DeleteProduct,
  UpdateProduct,
  findProductsById,
  findProductsByCreatorId,
} from '../lib/product';
import { bidsOfProductWithUser, createBid } from '../lib/bid'
import { setLoginSession, getLoginSession } from '../lib/auth';
import { removeTokenCookie } from '../lib/auth-cookies';
import dateScalar from './ScalarTypes'
export const resolvers = {
  Date: dateScalar,
  Query: {
    async viewer(_parent, _args, context, _info) {
      try {
        const session = await getLoginSession(context.req);
        if (session) {
          return findUser(session);
        }
      } catch (error) {
        throw new AuthenticationError(
          'Authentication token is invalid, please log in'
        );
      }
    },
    async userById(_parent, _args, context, _info) {
      try {
          return findUser({id:_args.id});
      } catch (error) {
        throw new AuthenticationError(
          'Authentication token is invalid, please log in'
        );
      }
    },
    async products(_parent, args, _context, _info) {
      try {
        // Sort + Category
        if (args.sort && args.category)
          return listProducts({ sort: args.sort, category: args.category });
        // Sort
        else if (args.sort) return listProducts({ sort: args.sort });
        // Category
        else if (args.category)
          return listProducts({ category: args.category });
        // Default
        return listProducts({ sort: false, category: false });
      } catch (error) {
        throw new Error('It is not possible list products');
      }
    },
    async productsById(_parent, args, _context, _info) {
      try {
        return await findProductsById({ id: args.id });
      } catch (error) {
        console.log({error})
        throw new Error('It is not possible list products');
      }
    },
    async productsByCreatorId(_parent, args, _context, _info) {
      try {
        return await findProductsByCreatorId({ id: args.id });
      } catch (error) {
        console.log({error})
        throw new Error('It is not possible list products');
      }
    },    async product(_parent, args, _context, _info) {
      try {
        return findProduct({ id: args.id });
      } catch (error) {
        throw new Error('It is not possible list product');
      }
    },
    async categories(_parent, _args, _context, _info) {
      try {
        return listCategories();
      } catch (error) {
        throw new Error('It is not possible list categories');
      }
    },
    async bidsOfProduct(_parent, _args, _context, _info) {
      try {
        return bidsOfProductWithUser(_args.product_id);
      } catch (error) {
        console.log(error)
        throw new Error('It is not possible list bids');
      }
    },
  },
  Mutation: {
    async signUp(_parent, args, _context, _info) {
      const userExist = await findUser({ email: args.input.email });

      if (userExist)
        throw new UserInputError('email is already in use, try to login');

      const user = await createUser(args.input);
      return { user };
    },
    async signIn(_parent, args, context, _info) {
      const user = await findUser({ email: args.input.email });

      if (user && (await validatePassword(user, args.input.password))) {
        const session = {
          id: user.id,
          email: user.email,
        };

        await setLoginSession(context.res, session);

        return { user };
      }

      throw new UserInputError('Invalid email and password combination');
    },
    async signOut(_parent, _args, context, _info) {
      removeTokenCookie(context.res);
      return true;
    },
    async updateProfile(_parent, args, _context, _info) {
      const session = await getLoginSession(_context.req);

      if (!session) {
        throw new Error('user required to upadte profile');
      }
      const user = await updateUser(args.input, session.email);
      return { user };
    },
    async createProduct(_parent, args, _context, _info) {
      const session = await getLoginSession(_context.req);

      if (!session) {
        throw new Error('user required to create product');
      }

      const user = await findUserByWallet({ wallet: session.wallet });

      console.log({user})

      if (!user || !user.creator) {
        throw new Error('this user is not allowed to create product');
      }

      args.input.userId=user.id;
      args.input.creator=user.name || user.wallet;
      try {
        const product = await CreateProduct(args.input);

        return { product };
      } catch (error) {
        throw new Error('It is not possible create a new product');
      }
    },
    async deleteProduct(_parent, args, _context, _info) {
      try {
        await DeleteProduct({ id: args.id });
        return true;
      } catch (error) {
        throw new Error('It is not possible delete the product');
      }
    },
    async updateProduct(_parent, args, _context, _info) {
      try {
        const product = await UpdateProduct(args.id, args.input);
        return { product };
      } catch (error) {
        throw new Error('it is not possible update the product');
      }
    },
    async createBidMut(_parent, args, _context, _info) {
      try {
        const session = await getLoginSession(_context.req);

        if (!session)
          throw new UserInputError('login required');

        const created_at = await createBid(args.product_id, session.id, args.price);
        console.log({ created_at })

        return {bid: { created_at }};
      } catch (error) {
        console.log(error)
        throw error;
      }
    },
  },
};
