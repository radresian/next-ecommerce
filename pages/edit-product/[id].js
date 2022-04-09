import {useRouter} from 'next/router';
import Create from '../create'

export default function EditProduct(){
  const router = useRouter();
  const { id } = router.query;
  return <Create id={id}></Create>
}
