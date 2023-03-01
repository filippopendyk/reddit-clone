export default function getFilterString(filter: string){
    if(filter === 'best'){
        return 'best'
    }
    if(filter === 'top'){
        return 'top'
    }
    if(filter === 'new'){
        return 'newest'
    }
}