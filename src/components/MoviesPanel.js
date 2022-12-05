import React from 'react';
import '../App.css';

import MovieCard from './MovieCard';

const MovieList = [{ title: "Kaczka Dziwaczka", about: "Tutaj miejsce na coś", image: "https://pbs.twimg.com/media/FUe3KkTX0AALBDA.jpg" },
{ title: "Podejrzany kot", about: "Tutaj miejsce na coś", image: "https://paczaizm.pl/content/wp-content/uploads/kot-kotek-hehe-mem-reakcja.jpg"},{ title: "Kot co nie chce jeść", about: "asnfjadhaafffafafafafakfnsjncj", image: "https://www.wprost.pl/_thumb/d3/ab/6ed9152ec095f929eb3e1d7caecf.jpeg"},{ title: "Kaczka Dziwaczka", about: "Tutaj miejsce na coś", image: "https://pbs.twimg.com/media/FUe3KkTX0AALBDA.jpg" },
{ title: "Podejrzany kot", about: "Tutaj miejsce na coś", image: "https://paczaizm.pl/content/wp-content/uploads/kot-kotek-hehe-mem-reakcja.jpg"},
{ title: "Kot co nie chce jeść", about: "asnfjadhaafffafafafafakfnsjncj", image: "https://www.wprost.pl/_thumb/d3/ab/6ed9152ec095f929eb3e1d7caecf.jpeg"},{ title: "Kaczka Dziwaczka", about: "Tutaj miejsce na coś", image: "https://pbs.twimg.com/media/FUe3KkTX0AALBDA.jpg" },
{ title: "Podejrzany kot", about: "Tutaj miejsce na coś", image: "https://paczaizm.pl/content/wp-content/uploads/kot-kotek-hehe-mem-reakcja.jpg"},
{ title: "Kot co nie chce jeść", about: "asnfjadhaafffafafafafakfnsjncj", image: "https://www.wprost.pl/_thumb/d3/ab/6ed9152ec095f929eb3e1d7caecf.jpeg"},{ title: "Kaczka Dziwaczka", about: "Tutaj miejsce na coś", image: "https://pbs.twimg.com/media/FUe3KkTX0AALBDA.jpg" },
{ title: "Podejrzany kot", about: "Tutaj miejsce na coś", image: "https://paczaizm.pl/content/wp-content/uploads/kot-kotek-hehe-mem-reakcja.jpg"},{ title: "Kaczka Dziwaczka", about: "Tutaj miejsce na coś", image: "https://pbs.twimg.com/media/FUe3KkTX0AALBDA.jpg" },
{ title: "Podejrzany kot", about: "Tutaj miejsce na coś", image: "https://paczaizm.pl/content/wp-content/uploads/kot-kotek-hehe-mem-reakcja.jpg"},
{ title: "Kot co nie chce jeść", about: "asnfjadhaafffafafafafakfnsjncj", image: "https://www.wprost.pl/_thumb/d3/ab/6ed9152ec095f929eb3e1d7caecf.jpeg"},{ title: "Kaczka Dziwaczka", about: "Tutaj miejsce na coś", image: "https://pbs.twimg.com/media/FUe3KkTX0AALBDA.jpg" },
{ title: "Podejrzany kot", about: "Tutaj miejsce na coś", image: "https://paczaizm.pl/content/wp-content/uploads/kot-kotek-hehe-mem-reakcja.jpg"},
{ title: "Kot co nie chce jeść", about: "asnfjadhaafffafafafafakfnsjncj", image: "https://www.wprost.pl/_thumb/d3/ab/6ed9152ec095f929eb3e1d7caecf.jpeg"},{ title: "Kaczka Dziwaczka", about: "Tutaj miejsce na coś", image: "https://pbs.twimg.com/media/FUe3KkTX0AALBDA.jpg" },
{ title: "Podejrzany kot", about: "Tutaj miejsce na coś", image: "https://paczaizm.pl/content/wp-content/uploads/kot-kotek-hehe-mem-reakcja.jpg"},
{ title: "Kot co nie chce jeść", about: "asnfjadhaafffafafafafakfnsjncj", image: "https://www.wprost.pl/_thumb/d3/ab/6ed9152ec095f929eb3e1d7caecf.jpeg"},{ title: "Kaczka Dziwaczka", about: "Tutaj miejsce na coś", image: "https://pbs.twimg.com/media/FUe3KkTX0AALBDA.jpg" },
{ title: "Podejrzany kot", about: "Tutaj miejsce na coś", image: "https://paczaizm.pl/content/wp-content/uploads/kot-kotek-hehe-mem-reakcja.jpg"},{ title: "Kaczka Dziwaczka", about: "Tutaj miejsce na coś", image: "https://pbs.twimg.com/media/FUe3KkTX0AALBDA.jpg" },
{ title: "Podejrzany kot", about: "Tutaj miejsce na coś", image: "https://paczaizm.pl/content/wp-content/uploads/kot-kotek-hehe-mem-reakcja.jpg"},
{ title: "Kot co nie chce jeść", about: "asnfjadhaafffafafafafakfnsjncj", image: "https://www.wprost.pl/_thumb/d3/ab/6ed9152ec095f929eb3e1d7caecf.jpeg"},{ title: "Kaczka Dziwaczka", about: "Tutaj miejsce na coś", image: "https://pbs.twimg.com/media/FUe3KkTX0AALBDA.jpg" },
{ title: "Podejrzany kot", about: "Tutaj miejsce na coś", image: "https://paczaizm.pl/content/wp-content/uploads/kot-kotek-hehe-mem-reakcja.jpg"},
{ title: "Kot co nie chce jeść", about: "asnfjadhaafffafafafafakfnsjncj", image: "https://www.wprost.pl/_thumb/d3/ab/6ed9152ec095f929eb3e1d7caecf.jpeg"},{ title: "Kaczka Dziwaczka", about: "Tutaj miejsce na coś", image: "https://pbs.twimg.com/media/FUe3KkTX0AALBDA.jpg" },
{ title: "Podejrzany kot", about: "Tutaj miejsce na coś", image: "https://paczaizm.pl/content/wp-content/uploads/kot-kotek-hehe-mem-reakcja.jpg"},
{ title: "Kot co nie chce jeść", about: "asnfjadhaafffafafafafakfnsjncj", image: "https://www.wprost.pl/_thumb/d3/ab/6ed9152ec095f929eb3e1d7caecf.jpeg"},{ title: "Kaczka Dziwaczka", about: "Tutaj miejsce na coś", image: "https://pbs.twimg.com/media/FUe3KkTX0AALBDA.jpg" },
{ title: "Podejrzany kot", about: "Tutaj miejsce na coś", image: "https://paczaizm.pl/content/wp-content/uploads/kot-kotek-hehe-mem-reakcja.jpg"}
]

const MoviesPanel = () => {
    return (<>
        <div className='MoviesGrid'>
            {MovieList.map((items) => (<MovieCard title={items.title} about={items.about} image={items.image} />
            ))}


        </div>

    </>
    );
};

export default MoviesPanel;