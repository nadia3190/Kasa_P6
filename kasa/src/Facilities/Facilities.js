
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



async function fetchData(url, navigate) {// async permet de définir une fonction asynchrone, qui renvoie un objet AsynchroneFunction
    try {
        const response = await fetch(url);// await response permet d'attendre la réponse de la requête fetch 
        const data = await response.json();
        return { data, error: null };
    } catch (error) {
        console.log(error);
        navigate("/not-found", { state: { message: "Erreur dans la récupération des données" } });
        return { data: null, error };
    }
}


const UseGetListings = () => {
    const navigate = useNavigate();
    const [listings, setListings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getListings() {
            const { data, error } = await fetchData("../../../Data/logements.json", navigate);
            if (data) {
                setListings(data);
            } else {
                setError(error);
            }
            setIsLoading(false);
        }
        getListings();
    }, [navigate]);

    return { listings, isLoading, error };
}


const UseGetListingById = (params) => {
    const navigate = useNavigate();
    const [listingById, setListingById] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getListingById() {
            const { data, error } = await fetchData("../../data/logements.json", navigate);
            if (data) {
                setListingById(data.find(item => item.id === params.id));
            } else {
                setError(error);// error est une propriété de l'objet ErrorEvent qui contient un message d'erreur détaillé
            }
            setIsLoading(false);// setIsLoading est une fonction qui permet de mettre à jour la valeur de isLoading 
        }
        getListingById();
    }, [params.id, navigate]);

    return { listingById, isLoading, error };
}

export { UseGetListings, UseGetListingById };// les {} car il s'agit d'une fonction et non une varaible

