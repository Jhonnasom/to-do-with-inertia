import {Text,Input,Label, TextField as RATextField} from 'react-aria-components';
export default function TextField(
    { label, description, errorMessage, ...props }
) {
    return (
        <RATextField {...props}>
            <Label>{label}</Label>
            <Input className='border-y-0 h-10 rounded p-4 w-full'/>
            {description && <Text slot="description">{description}</Text>}
            {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
        </RATextField>
    );
}
