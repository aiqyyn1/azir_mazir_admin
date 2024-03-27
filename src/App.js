import { Admin, ListGuesser, Resource, ShowGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { PostCreate, PostEdit, PostList } from './components/Posts';

function App() {
  const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com/');
  console.log(dataProvider);
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="posts"
        list={<PostList />}
        create={<PostCreate />}
        edit={<PostEdit />}
        recordRepresentation="id"
      ></Resource>
    </Admin>
  );
}

export default App;
