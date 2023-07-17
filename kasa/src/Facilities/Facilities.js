
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UseGetListings = () => {
    const navigate = useNavigate();//useNavigate permet de naviguer entre les pages 
    const [listings, setListings] = useState([]);// useState permet de créer un état local dans un composant fonctionnel
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function getListings() {
            try {
                const response = await fetch("../../../data/logements.json");
                const data = await response.json();
                setListings(data);
            } catch (error) {
                console.log(error);
                setError(true);
                navigate("/not-found", { state: { message: "Erreur dans la récupération des données" } });
            } finally {
                setTimeout(() => {
                    setIsLoading(false);
                }, 1500);
            }
        }
        getListings();
    }, [navigate]);

    return { listings, isLoading, error };
}

export { UseGetListings };

export function UseGetListingById(params) {
    const navigate = useNavigate()
    const [listingById, setListingById] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        async function getListingById() {
            try {
                const response = await fetch("../../data/logements.json")
                const data = await response.json()
                setListingById(data.find(item => item.id === params.id))
            }
            catch(err) {
                console.log(err)
                setError(true)
                navigate("/not-found", { state: { message: "Erreur dans la récupération des données" } })
            }
            finally {
                setTimeout(() => {
                    setIsLoading(false)
                }, 1500)
            }
        }
        getListingById()
    }, [params.id, navigate])

    return {listingById, isLoading, error}
}


