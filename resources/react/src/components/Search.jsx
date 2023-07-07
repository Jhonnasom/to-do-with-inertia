import {SearchField, Label, Input, Button} from 'react-aria-components'

export default function Search({onChange}){
    return (
        <SearchField>
            <Label className='flex flex-row'>Search</Label>
            <Input onChange={onChange} className='border-2 border-gray-200 rounded-b' />
            <Button>✕</Button>
        </SearchField>
    )
}
