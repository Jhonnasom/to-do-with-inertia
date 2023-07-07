export default function Button(props){
    return(
        <button
            {...props}
            className="border rounded font-medium px-4 py-2 bg-gray-900 text-white hover:bg-gray-700"
        />
    )
}
