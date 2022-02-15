export default function clear(){
    document.body.querySelectorAll('div').forEach(node => {
        node.remove();
    })
}