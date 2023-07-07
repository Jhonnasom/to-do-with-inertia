import {Cell, Column, Row, Table, TableBody, TableHeader} from 'react-aria-components';
import {faPenToSquare as fasPenToSquare} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {router} from "@inertiajs/react";
import Page from '../../components/Page';
import Button from '../../ui/Button.jsx';
export default function Index({products}){
    const actionsMarkup=(
        <Button onClick={()=>router.visit('/products/create')}>
            Add Product
        </Button>
    )
    return (
        <Page actions={actionsMarkup} title='Products'>

            <Table aria-label="Products" className='w-full'>
                <TableHeader className='border border-gray-200'>
                    <Column className='text-left text-sm text-gray-500 font-medium' isRowHeader>Name</Column>
                    <Column className='text-left text-sm text-gray-500 font-medium'>Price</Column>
                    <Column></Column>
                </TableHeader>
                <TableBody>
                    {products.data.map((product)=>(
                        <Row key={product.id} className='border border-gray-200'>
                            <Cell className='p-y-4'>{product.name}</Cell>
                            {/*Para poner automaticamente la moneda*/}
                            <Cell className='p-y-4'>
                                {new Intl.NumberFormat('es-NI',
                                    {style:'currency',currency:'NIO'}).format(product.price)}
                            </Cell>
                            <Cell className='p-y-4'>
                                <button
                                    className='text-gray-500 hover:text-gray-800'
                                    onClick={()=>router.visit(`/products/${product.id}/edit`)}>
                                    <FontAwesomeIcon icon={fasPenToSquare}/>
                                </button>

                            </Cell>
                        </Row>
                    ))}
                </TableBody>
            </Table>
        </Page>
    )
}
