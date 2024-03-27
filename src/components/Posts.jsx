import {
  List,
  Create,
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  Datagrid,
  TextField,
  DateField,
  NumberInput,
} from 'react-admin';

export const PostList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="body" />
      </Datagrid>
    </List>
  );
};

export const PostCreate = () => {
  return (
    <Create title="Create a Post">
      <SimpleForm>
        <NumberInput source="id" />
        <TextInput source="title" />
        <TextInput multiline source="body" />
      </SimpleForm>
    </Create>
  );
};

export const PostEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <NumberInput disabled source="id" />
        <TextInput source="title" />
        <TextInput multiline source="body" />
      </SimpleForm>
    </Edit>
  );
};
