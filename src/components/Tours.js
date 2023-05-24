import Card from './Card'
function Tours({tours, removeTour , setTour}) {
    return (
        <div className='container'>
            <div>
                <h2 className='title'> Plan With Love</h2>
            </div>
            <div className='cards'>
                {
                    tours.map( (tour) => {
                        return <Card key={tour.id} {...tour} removeTour={removeTour} setTour={setTour}></Card>
                    } )
                }
            </div>
        </div>
    );
}

export default Tours;