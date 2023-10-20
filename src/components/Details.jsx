import { Link, useLoaderData } from "react-router-dom";

const Details = () => {

    const loadForDetails = useLoaderData();
    // console.log(loadForUpdate);
    const{ name , brand , type ,price , photo , rating , description} = loadForDetails;


    return (
        <div>

            <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{brand}</p>
                    <p>{type}</p>
                    <p>{price}</p>
                    <p>{rating}</p>
                    <p>{description}</p>
                   
                    <div className="card-actions justify-end">
                        <Link><button className="btn btn-primary">Add to Cart</button></Link>
                        
                    </div>
                </div>
            </div>
            </div>



            <div>
                <h1>Highlights</h1>
                <p>This phone comes with a 6.7 inches LTPO Super Retina XDR OLED 1290 x 2796 pixels screen. It has a double punch-hole design. The back camera is of quad 48+12+12 Megapixel + TOF 3D LiDAR scanner with powerful image processing capability and 4K video recording. The front one is of Dual 12 MP and SL 3D camera.

                    The phone comes with 4323 mAh battery with fast charging facility. It has 6 GB RAM, up to 3.46 GHz Hexa-core CPU and Apple GPU. It is powered by a 4 nm Apple A16 Bionic chip set. The device comes with 128, 256, 512 GB or 1 TB internal storage.</p>
            </div>

            <div>
                <tbody>
                    <tr><td><strong>Models</strong></td><td>A2894 (International); A2651 (USA); A2893 (Canada, Japan); A2896 (China, Hong Kong); A2895 (Russia)</td></tr>
                    <tr><td><strong>First Release</strong></td><td>September 16, 2022</td></tr>
                    <tr><td><strong>Colors</strong></td><td>Space Black, Silver, Gold, Deep Purple</td></tr><tr><th>&nbsp;Connectivity</th><th>&nbsp;</th></tr>
                    <tr><td>Network</td><td>2G, 3G, 4G, 5G</td></tr>
                    <tr><td>SIM</td><td>Dual SIM (Nano-SIM and eSIM)</td></tr>
                    <tr><td>WLAN</td><td>dual-band, Wi-Fi hotspot</td></tr>
                    <tr><td>Bluetooth</td><td>v5.3, A2DP, LE</td></tr>
                    <tr><td>GPS</td><td>A-GPS, GLONASS, GALILEO, BDS, QZSS</td></tr>
                    <tr><td>Radio</td><td>✖</td></tr>
                    <tr><td>USB</td><td>Lightning, USB 2.0</td></tr>
                    <tr><td>OTG</td><td></td></tr>
                    <tr><td>USB Type-C</td><td>✖ (Proprietary reversible connector)</td></tr>
                    <tr><td>NFC</td><td></td></tr>
                    <tr><th>&nbsp;Body</th><th>&nbsp;</th></tr>
                    <tr><td>Style</td><td>Double Punch-hole</td></tr>
                    <tr><td>Material</td><td>Gorilla Glass front &amp; back, stainless steel</td></tr>
                    <tr><td>Water Resistance</td><td>IP68 dust/water resistant (up to 6m for 30 mins)</td></tr>
                    <tr><td>Dimensions</td><td>160.7 x 77.6 x 7.9 millimeters</td></tr>
                    <tr><td>Weight</td><td>240 grams</td></tr>
                    <tr><th>&nbsp;Display</th><th>&nbsp;</th></tr>
                    <tr><td>Size</td><td>6.7 inches</td></tr>
                    <tr><td>Resolution</td><td>1290 x 2796 pixels (460 ppi)</td></tr>
                    <tr><td>Technology</td><td>LTPO Super Retina XDR OLED Touchscreen</td></tr>
                    <tr><td>Protection</td><td> Scratch-resistant ceramic glass, oleophobic coating</td></tr>
                    <tr><td>Features</td><td>120Hz, HDR10, Dolby Vision, 2000 nits (max.), Always-On display</td></tr>
                    <tr><th>&nbsp;Back Camera</th><th>&nbsp;</th></tr>
                    <tr><td>Resolution</td><td>Quad 48+12+12 Megapixel + TOF 3D LiDAR scanner</td></tr>
                    <tr><td>Features</td><td>Dual Pixel PDAF, sensor-shift OIS, ultrawide, telephoto, 3x optical zoom, depth &amp; more</td></tr>
                    <tr><td>Video Recording</td><td>4K (2160p), Dolby Vision HDR, 10-bit HDR, stereo sound rec.,Cinematic mode, ProRes</td></tr>
                    <tr><th>&nbsp;Front Camera</th><th>&nbsp;</th></tr>
                    <tr><td>Resolution</td><td>Dual 12 Megapixel + SL 3D</td></tr>
                    <tr><td>Features</td><td>F/1.9 aperture, PDAF, HDR, 1/3.6″, depth / biometrics sensor</td></tr>
                    <tr><td>Video Recording</td><td>4K (2160p), gyro-EIS, Cinematic mode</td></tr>
                </tbody>
            </div>

        </div>
    );
};

export default Details;