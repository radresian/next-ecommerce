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
import {CATEGORIES, VIEWER} from '../../apollo/client/queries';

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

export default function Create() {
  const [createProduct] = useMutation(CREATE_PRODUCT);
  let { data: cData, loading: cLoading, error: cError } = useQuery(CATEGORIES);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [priceType, setPriceType] = useState('');
  const [category, setCategory] = useState(1);
  const [file, setFile] = useState(null);
  const [msgError, setMsgError] = useState('');
  const [msgSuccess, setMsgSuccess] = useState('');
  const [auctionStart, onStartChange] = useState(new Date());
  const [auctionEnd, onEndChange] = useState(new Date());


  const { data, loading, error } = useQuery(VIEWER);
  const viewer = data?.viewer;

  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    console.log({priceType})
    try {
      const result = await createProduct({
        variables: {
          name: name.trim(),
          description: desc.trim(),
          priceType: priceType.value.trim(),
          price,
          file,
          category_id: Number(category.value)
        }
      });
      setMsgSuccess('NFT sale created successfully');
      console.log({result});
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
  return !loading && !cLoading && (
    <Page>
      {viewer ?
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <h3 className="formTitle">Create NFT</h3>

          {msgError && <AlertError message={msgError} />}
          {msgSuccess && <AlertSuccess message={msgSuccess} />}

          <InputContainer>
            {file &&
            <div className="product-img">
              <Image src={file} layout='fill' objectFit='scale-down' />
            </div>
            }
            <label className="custom-file-upload">
              <input type="file" name="file" onChange={handleFileChange} />
              <div className="icon">
                <MdCloudUpload color="#000" size="22" />
                <p className="icon-p"> Upload File</p>
              </div>
            </label>
            <div className='inputContainer'>
              <Input
                type="input"
                name="name"
                placeholder="Name"
                onChange={(value) => setName(value)}
                value={name}
              />
            </div>
            <div className='inputContainer'>
              <Input
                type="input"
                name="description"
                placeholder="Description"
                onChange={(value) => setDesc(value)}
                value={desc}
              />
            </div>
            <div className='inputContainer'>
              <Select styles={customStyles} placeholder='Select Category...' options={cData.categories.map(category=>({value:category.id, label:category.label}))} value={category} onChange={(val)=>{setCategory(val)}}>
              </Select>
            </div>
            <div className='inputContainer'>
              <Select styles={customStyles} options={saleOptions} isSearchable={false} placeholder='Select Sale Type...' value={priceType} onChange={(val)=>{setPriceType(val)}}>
              </Select>
            </div>
            {priceType.value === 'auction' &&
              <div className='dateConntainer'>

                <div>
                  <Datetime
                    inputProps={{ placeholder: 'Auction Start', className:'date-time-input'}}
                  />
                </div>
                <div>
                  <Datetime
                    inputProps={{ placeholder: 'Auction End', className:'date-time-input date-time-input2'}}
                  />
                </div>
              </div>
              }

            <div className='inputContainer'>
              <Input
                type="input"
                name="price"
                placeholder="Reserve Price"
                onChange={(value) => setPrice(value)}
                value={price}
              />
            </div>
            <Button type="submit" title="Create" />
          </InputContainer>
        </form>

      </FormContainer> : <p>Please Login</p>

      }
      <style jsx>{`
        form {
          width: 100%;
          align-items: center;
        }
        input[type="file"] {
          display: none;
        }
        .inputContainer {
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
