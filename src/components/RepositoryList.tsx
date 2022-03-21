import { useEffect, useState } from "react";

import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'

interface Repository{ 
    name: string;
    description: string;
    link: string;
}

export function RepositoryList() {

    const [repositories, setRepositories] = useState<Repository[]>([])
    useEffect(()=>{
        fetch('https://api.github.com/orgs/rocketseat/repos',{
            method: 'GET',
            mode: 'cors',
        })
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, [])
    
    return(
        <section className="repository-list">
            <h1>Lista de repositorios</h1>
            <ul>
                {
                    repositories.map(repository=>(
                        <RepositoryItem
                            key={repository.name}
                            repository={repository}
                        />
                    ))
                }
            </ul>
        </section>
    )
}