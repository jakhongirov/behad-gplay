import './adsApp.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function AdsApp() {
    const [data, setData] = useState({})
    const { packageName, campaign_id, app_ads_id, user_id } = useParams()

    useEffect(() => {
        fetch('https://ads.adstar.uz/api/v1/gplay?packagename=' + packageName, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 200) {
                    setData(data.data)
                } else {
                    console.log(data);
                }
            })
            .catch((e) => console.log(e))
    }, [packageName])

    const AddAction = () => {

        fetch("https://ads.adstar.uz/api/v1/addAction", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                app_ads_id: app_ads_id,
                action: 3,
                campaign_id: campaign_id,
                user_id: user_id
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data);
            }).catch((e) => console.log(e))
    }

    return (
        <>
            <main className='main'>
                <section className='app_ads'>
                    <div className="container">
                        <div className='model_item'>
                            <div className='img_box'>
                                <img className='img' src={data.icon} alt={data.title} width={200} height={200} />
                            </div>

                            <h1 className='title'>{data.title}</h1>

                            <p className='text'>{data.summary}</p>

                            <div className='btn_box'>

                                <a className='install' href={data.url} target="_blank" rel="noopener noreferrer" onClick={AddAction}>O'rnatish</a>

                            </div>

                            <img className='gp_img' src="https://download.logo.wine/logo/Google_Play/Google_Play-Logo.wine.png" alt="play market icon" width={200} height={100} />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default AdsApp