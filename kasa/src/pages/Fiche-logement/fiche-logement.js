import React from "react"
import Section from "../../components/Section/Section"
import "./fiche-logement.scss"
export const paragraph = "paragraph"
export const list = "list"

const FicheLogement =() => {  
  

        return ( 
            <section className="main">

    
                <div className="listing--content">
                    <div className="listing--content-wrapper">
                        <div className="listing--wrapper-left">
                            <div className="listing--heading">
                                
                            </div>
                           
                        </div>
                        <div className="listing--wrapper-right">   
                        </div>
                    </div>
                    <div className="collapsible-container">
                        <Section />
    
                        <Section />
                    </div>
                </div>
            </section>
        )
    }

export default FicheLogement;