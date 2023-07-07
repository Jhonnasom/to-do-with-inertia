import TextField from '../../ui/TextField.jsx';
import Button from '../../ui/Button.jsx';
import Page from '../../components/Page.jsx';
import {router} from "@inertiajs/react";

export default function Create({errors}){
    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        router.post('/products', formData);
    }
    return (
<       Page title='Create Product'>
        <form className='space-y-4' onSubmit={handleSubmit}>
            <TextField errorMessage={errors.name} label='Name'  name='name'/>
            <TextField errorMessage={errors.price} label='Price'  name='price' type='number' step={0.1}/>
            <TextField errorMessage={errors.description} label='Description'  name='description'/>
            <Button type='submit'>Enviar</Button>
        </form>
        </Page>
)
}
