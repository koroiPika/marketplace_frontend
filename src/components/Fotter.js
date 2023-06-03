import React from 'react'

const Fotter = () => {
    return (
        <footer class="bg-dark text-light">
            <div class="container p-3">
                <div class="row">
                    <div class="col">
                        <h5>MarketPlace</h5>
                        <p>Desafio Latam</p>
                    </div>
                    <div class="col">
                        <h5>Contact</h5>
                        <ul class="list-unstyled">
                            <li>Phone: 123-456-7890</li>
                            <li>Email: dev@gmail.com</li>
                        </ul>
                    </div>
                    <div class="col">
                        <h5>Links</h5>
                        <ul class="list-unstyled">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Fotter