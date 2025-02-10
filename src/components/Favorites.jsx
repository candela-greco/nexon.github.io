import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaHeart } from "react-icons/fa";

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(storedFavorites);
    }, []);

    const removeFavorite = (id) => {
        const updatedFavorites = favorites.filter(fav => fav.id !== id);
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    };

    return (
        <div className="container">
            <h2>Mis Favoritos</h2>
            <div className="row">
                {favorites.length > 0 ? (
                    favorites.map(product => (
                        <div key={product.id} className="col-md-4">
                            <Card style={{ width: '18rem' }} className="mb-3">
                                <Card.Img variant="top" src={product.image} alt={`Foto de ${product.name}`} />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Button variant="danger" onClick={() => removeFavorite(product.id)}>
                                        <FaHeart color="white" /> Quitar
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))
                ) : (
                    <p>No tienes productos en favoritos.</p>
                )}
            </div>
        </div>
    );
};

export default Favorites;
