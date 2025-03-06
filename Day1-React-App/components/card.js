const Card = (abc) =>{
    console.log(abc);
    const {username} = abc;
    return (
        <div className='card'>
            <h3>Hello {username}!</h3>
            <p>Nice to meet you</p>
        </div>
    );
};

export default Card;

export const Title = "This is the title";