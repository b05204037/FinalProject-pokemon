function open(e){
    if(e.keyCode===73){
        this.setState({openMenu: !this.state.openMenu})
    }else{
        return false
    }
}


export default open