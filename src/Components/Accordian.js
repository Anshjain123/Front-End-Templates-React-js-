import React, {useEffect} from 'react'

function Accordian() {
    let arr = [
        {
            "Heading": "Computing",
            "Data": [
                "High Performance Computing",
                "Districbuted and parallel System",
                "Cloud Computing",
                "Edge Computing",
                "Fog Computing",
                "Human Centered Computing"
            ]
        },
        {
            "Heading": "Artificial Intelligence",
            "Data": [
                "Fuzzy Logic",
                "Expert System",
                "Agents and Multi Agent System",
                "Computational Optimisation",
                "Bio inspired Optimisation"
            ]
        },
        {
            "Heading": "Machine Learning",
            "Data": [
                "Deep Learning",
                "Neural Networks",
                "Natural Language Processing",
                "Data Mining",
                "Data Science",
                "GANs",
                "Software Engineering",
                "Recommender Systems",
                "Semantic web Analysis"
            ]
        },
        {
            "Heading": "Machine Vision",
            "Data": [
                "Human Computer Interaction",
                "Computer Vision",
                "Image and video processing",
                "Medical Diagnosis",
                "Augmented Reality",
                "Virtual Reality",
            ]
        },
        {
            "Heading": "Communication",
            "Data": [
                "Networking",
                "Wireless and Mobile Communication",
                "Signal Processing",
                "Internet of Things",
                "Cyber Physical Systems",
                "Wireless Sensor Networks",
                "Software defined networks",
                "Industry 4.0",
                "Security and Privacy",
                "Biometric Security",
                "Cyber Security",
            ]
        },
        {
            "Heading": "Futuristic Applications",
            "Data": [
                "Sustainable cities and Societies",
                "Smart Grids and Energy Networks",
                "Ambidient Assisted Living",
                "Smart Healthcare",
            ]
        }
    ];
    // const [state, setstate] = useState([])
    function accordion(target) {
        target.classList.toggle("accordion__header--active");
        target.nextElementSibling.classList.toggle("accordion__content--show");

    }


    useEffect(() => {
        const accordionHeaders = document.getElementsByClassName("accordion__header");

        for (let i = 0; i < accordionHeaders.length; i++) {
            let accordionHeader = accordionHeaders[i];
            accordionHeader.addEventListener('click', () => {
                accordion(accordionHeader);
            });
        }

    }, [])
    return (
        <div>
            <div class="accordion">
                <h1 class="accordion__title">ACCORDION</h1>
                <div class="accordion__item" >
                    <div class="accordion__header">
                        <h2 class="accordion__header-title">Title 01</h2><i class="accordion__header-toggle"></i>
                    </div>
                    <div class="accordion__content">
                        <h3 class="accordion__content-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                        <p class="accordion__content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, repellat vel et neque at asperiores recusandae necessitatibus voluptatum magnam. Odio est, repellendus quas molestias laborum itaque perspiciatis perferendis consequuntur quidem. Non ullam velit eaque accusantium nam, voluptates earum ab, placeat quaerat commodi delectus vel, magni maxime itaque dicta consequatur quisquam maiores nisi.</p>
                    </div>
                </div>
                <div class="accordion__item">
                    <div class="accordion__header">
                        <h2 class="accordion__header-title">Title 02</h2><i class="accordion__header-toggle"></i>
                    </div>
                    <div class="accordion__content">
                        <h3 class="accordion__content-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                        <p class="accordion__content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, repellat vel et neque at asperiores recusandae necessitatibus voluptatum magnam. Odio est, repellendus quas molestias laborum itaque perspiciatis perferendis consequuntur quidem. Non ullam velit eaque accusantium nam, voluptates earum ab, placeat quaerat commodi delectus vel, magni maxime itaque dicta consequatur quisquam maiores nisi.</p>
                    </div>
                </div>
                <div class="accordion__item">
                    <div class="accordion__header">
                        <h2 class="accordion__header-title">Title 03</h2><i class="accordion__header-toggle"></i>
                    </div>
                    <div class="accordion__content">
                        <h3 class="accordion__content-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                        <p class="accordion__content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In autem sapiente maxime dignissimos voluptatum maiores, id quae temporibus cumque amet omnis, quidem distinctio, consequatur nostrum explicabo corrupti sit. Corrupti, qui? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus perspiciatis, nemo soluta voluptas quisquam, fugiat. Assumenda similique nam, totam voluptate, sed perferendis vero ea a cumque magnam quas. Illum, facere.</p>
                    </div>
                </div>
                <div class="accordion__item">
                    <div class="accordion__header">
                        <h2 class="accordion__header-title">Title 04</h2><i class="accordion__header-toggle"></i>
                    </div>
                    <div class="accordion__content">
                        <h3 class="accordion__content-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                        <p class="accordion__content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit nam obcaecati deleniti suscipit libero mollitia ullam eaque debitis velit ipsam molestias atque maiores placeat perspiciatis quo earum fugit incidunt, quaerat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit repudiandae cumque placeat nemo asperiores vitae et saepe veritatis! Ea neque quas assumenda laudantium dolorem suscipit repellendus obcaecati, rem odit nihil.</p>
                    </div>
                </div>
                <div class="accordion__item">
                    <div class="accordion__header">
                        <h2 class="accordion__header-title">Title 05</h2><i class="accordion__header-toggle"></i>
                    </div>
                    <div class="accordion__content">
                        <h3 class="accordion__content-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                        <p class="accordion__content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae dolorum veritatis voluptatibus provident a nihil doloribus nisi quas, exercitationem dicta rem incidunt repudiandae dolorem quam. Fuga omnis, ea quaerat. Odit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus nesciunt ad quod quo, debitis deleniti cumque. Autem unde, aperiam nisi odit nihil quos nostrum eaque? Necessitatibus saepe neque delectus delenit.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordian
