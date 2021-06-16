import PropTypes from 'prop-types';

function Food({name, picture, rating}){
    return (
        <div>
            <h2>I Love {name}</h2>
            <h4>{rating}/5.0</h4>
            <img src={picture} alt={name} />
        </div>
        
    );
}

const foodILike = [
    {
        id: 1,
        name: 'Kimchi',
        image: 'https://www.canceranswer.co.kr/news/photo/202011/1492_2384_3330.jpg',
        rating: 5,
    },
    {
        id: 2,
        name: 'Samgyopsal',
        image: 'http://www.mindgil.com/news/photo/202103/70839_7148_1250.jpg',
        rating: 4.3,
    },
    {
        id: 3,
        name: 'Bibimbap',
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Dolsot-bibimbap.jpg',
        rating: 4.8,
    },
    {
        id: 4,
        name: 'DonCasu',
        image: 'http://th2.tmon.kr/thumbs/image/423/336/e17/1b1492318_700x700_95_FIT.jpg',
        rating: 4.1,
    },
    {
        id: 5,
        name: 'Kimbap',
        image: 'https://recipe1.ezmember.co.kr/cache/recipe/2019/03/10/168d255254103ff54861098af10adfae1.jpg',
        rating: 4.4,
    },
];


function App() {
    return(<div > 
                {foodILike.map(dish => (
                    <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
                ))}
            </div>) ;
}

Food.propTypes={
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
};


export default App;