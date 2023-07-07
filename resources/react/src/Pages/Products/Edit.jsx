import TextField from '../../ui/TextField.jsx';
import Button from '../../ui/Button.jsx';
import Page from '../../components/Page.jsx';
import {router} from "@inertiajs/react";

export default function Edit({errors,product}){
    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        formData.append('_method','PATCH');
        router.post(`/products/${product.id}`, formData);
    }
    return (
<       Page title={`Edit ${product.name}`}>
        <form className='space-y-4' onSubmit={handleSubmit}>
            <TextField
                errorMessage={errors.name}
                label='Name'
                name='name'
                defaultValue={product.name}
            />

            <TextField
                errorMessage={errors.price}
                label='Price'
                name='price'
                type='number'
                defaultValue={product.price}
                step={0.1}/>
            <TextField errorMessage={errors.description}
                       label='Description'
                       name='description'
                       defaultValue={product.description} />
            <Button type='submit'>Enviar</Button>
        </form>
        </Page>
)
}
