import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Page from '../../components/page';
import Link from 'next/link';
import { CREATE_PRODUCT } from '../../apollo/client/mutations';
import {useMutation, useApolloClient, useQuery} from '@apollo/client';
import { getErrorMessage } from '../../lib/form';

import AlertError from '../../components/alerts/error';
import AlertSuccess from '../../components/alerts/success';
import Button from '../../components/form/button';
import Input from '../../components/form/input';
import InputContainer from '../../components/form/InputContainer';
import FormContainer from '../../components/form/formContainer';
import Image from 'next/dist/client/image';
import Select from 'react-select'
import 'react-datetime/css/react-datetime.css';
import Datetime from 'react-datetime';

import {
  MdCloudUpload
} from 'react-icons/md';
import {CATEGORIES, PRODUCTS_BY_IDS, VIEWER} from '../../apollo/client/queries';

const customStyles = {
  container: (provided, state) => ({
    ...provided,
    marginBottom: 34,
    borderRadius: 6,
    boxShadow: '1px 1px 4px rgb(0 0 0 / 20%)'
  }),
  control: (provided, state) => ({
    ...provided,
    height: 55,
    paddingLeft: 20
  })
};

const saleOptions = [
  { value: 'offer', label: 'Price Offer' },
  { value: 'auction', label: 'Auction' }
]

export default function Create({id=0}) {
  const [createProduct] = useMutation(CREATE_PRODUCT);
  let { data: cData, loading: cLoading, error: cError } = useQuery(CATEGORIES);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [priceType, setPriceType] = useState('fixed');
  const [category, setCategory] = useState({});
  const [file, setFile] = useState(null);
  const [msgError, setMsgError] = useState('');
  const [msgSuccess, setMsgSuccess] = useState('');
  const [auctionStart, setStartChange] = useState(null);
  const [auctionEnd, setEndChange] = useState(null);

  const { data: productsByIdData } = useQuery(PRODUCTS_BY_IDS, {
    variables: {
      id,
    },
  });

  const { data, loading, error } = useQuery(VIEWER);
  const viewer = data?.viewer;
  const product = productsByIdData?.productsById[0];

  useEffect(()=>{
    if(product){
      setName(product.name);
      setDesc(product.description);
      setPriceType(product.sellType);
      setPrice(product.price);
      setCategory({value: product.category_id, label:product.category_label});
      setFile(product.img_url);
    }
  },[product]);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    console.log({priceType})
    try {
      const result = await createProduct({
        variables: {
          id,
          name: name.trim(),
          description: desc.trim(),
          price,
          sellType: priceType,
          file,
          category_id: Number(category.value)
        }
      });
      setMsgSuccess('NFT sale created successfully');
      console.log({result});
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    } catch (error) {
      setMsgError(getErrorMessage(error));
    }
  }

  function handleFileChange(e){
    const selectedFile = e.target.files[0];
    const data = new FormData();
    data.append('file', selectedFile, selectedFile.name);
    fetch('/api/create-file', {
      method: 'POST',
      body: data
    }).then((res) => {
      res.json().then(json=>{
        console.log(json.path.replace('public',''));
        setFile(json.path.replace('public',''))
      })
    });
  }

  function maxLengthCheck(object){
    console.log(object.target.max);
    if (object.target.value > Number(object.target.max) ) {
      object.target.value = Number(object.target.max);
    }
    if (object.target.value < Number(object.target.min) ) {
      object.target.value = Number(object.target.min);
    }
  }

  return !loading && !cLoading && (
    <Page>
      {viewer && (!id || viewer.id == product?.creator_id) ?
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <h3 className="formTitle">{product ? 'NFT Düzenle' : 'NFT Yap'}</h3>

          {msgError && <AlertError message={msgError} />}
          {msgSuccess && <AlertSuccess message={msgSuccess} />}

          <InputContainer>
            {file &&
            <div className="product-img">
              <img src={file} style={{objectFit: 'cover', width: '100%'}} />
            </div>
            }
            <label className="custom-file-upload">
              <input type="file" name="file" onChange={handleFileChange} />
              <div className="icon">
                <MdCloudUpload color="#000" size="22" />
                <p className="icon-p"> Dosya Yükle</p>
              </div>
            </label>
            <div className='inputContainer'>
              <Input
                type="input"
                name="name"
                placeholder="NFT adı"
                onChange={(value) => setName(value)}
                value={name}
              />
            </div>
            <div className='inputContainer'>
              <Input
                type="input"
                name="description"
                placeholder="Açıklama"
                onChange={(value) => setDesc(value)}
                value={desc}
              />
            </div>
            <div className='inputContainer'>
              <Select styles={customStyles} placeholder='Kategori Seç...' options={cData.categories.map(category=>({value:category.id, label:category.label}))} value={category} onChange={(selected)=>{setCategory(selected)}}>
              </Select>
            </div>
            <div className='inputContainer'>
              <Input
                type="number"
                min="0"
                max="99999999"
                step="1"
                name="price"
                placeholder="Liste Fiyatı"
                onInput={maxLengthCheck}
                onChange={(value) => setPrice(value)}
                value={price}
              />
            </div>
            <div className='reserve-price-text'>
              <span>Liste fiyatının üstünde bir fiyat teklifi gelince 24 saatlik bir açık artırma başlayacaktır.</span>
            </div>
            <Button type="submit" title={id ? 'NFT Düzenle' : 'NFT Oluştur'} />
          </InputContainer>
        </form>

      </FormContainer> : <p>Please Login</p>

      }
      <style jsx>{`
        form {
          width: 100%;
          align-items: center;
        }
        .inputContainer {
          width:100%;
        }
        .reserve-price-text {
          margin-top: -25px;
          margin-left: 10px;
          width:100%;
        }
        .dateConntainer {
          width:100%;
        }
        .icon {
          display:flex;
        }
        .icon-p {
          margin-top: 3px;
          margin-left: 10px;
        }
        input[type="file"] {
          display: none;
        }
        .custom-file-upload {
          border: 1px solid #ccc;
          display: inline-block;
          padding: 6px 12px;
          cursor: pointer;
          margin-bottom:20px;
          margin-top:20px;
        }
        .product-img {
          position: relative;
          width: 100%;
          height: 500px;
          justify-content: center;
          display: flex;
        }
        form .formTitle {
          text-align: center;
          font-size: 38px;
          font-weight: 1000;
          letter-spacing: 1.65px;
          color: #b2b2b2;
          text-transform: uppercase;
          margin-bottom: 84px;
        }
        .switchForm {
          color: #b2b2b2;
          margin-top: 12px;
          font-weight: 500;
        }

        @media (min-width: 500px) {
          .dateConntainer {
            display:flex;
          }
        }
      `}</style>
    </Page>
  );
}
