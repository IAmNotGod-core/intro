import './Card.css'

export default function Card({ title }) {
    return( 
        <>
        <div className="card">
            <div className="card-header">
                <div className="circles">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
                <div className="card-title">
                    <p>{title ? title : 'Who Am I' }</p>
                </div>
            </div>
            <div className="card-body">
                <code>
                    My name is Lintang Ksatria, currently I am study in Dian Nuswantoro University taking Informatics Engineering as major. I interested to programming and graphic design.
                </code>
            </div>
        </div>
        </>
    )
}