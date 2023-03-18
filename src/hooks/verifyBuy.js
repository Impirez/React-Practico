const verifyBuy = (cartNumber) => {
    if(cartNumber && (cartNumber <= 9)){
        return (
        cartNumber
        )
    }else if(cartNumber > 9){
        return (
            '+9'
            )
    }else{
        return '0';
    }
}
export default verifyBuy;