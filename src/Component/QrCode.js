import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import "../css/QRCode.css";

const QRcode = () => {
    const [startNumber, setStartNumber] = useState('');
    const [endNumber, setEndNumber] = useState('');
    const [qrcodes, setQrcodes] = useState([]);

    const generateQrcodes = () => {
        const qrcodes = [];
        setQrcodes([]);

        if (endNumber < startNumber) {
            alert('後面數字要大於前面！')
        } else if (startNumber <= 0 || endNumber <= 0) {
            alert('請輸入大於0的數字！')
        } else {
            for (let i = startNumber; i <= endNumber; i++) {
                qrcodes.push({
                    url: `https://www.example.com/${i}`,
                    index: i,
                });
            }
            setQrcodes(qrcodes);
        }
    };

    const clear = () => {
        setQrcodes([]);
        setStartNumber('');
        setEndNumber('');
    }

    return (
        <div className="panelCon">
            <div className="functionCon">
                <div className="flex" style={{ justifyContent: 'center' }}>
                    <input
                        type="number"
                        value={startNumber}
                        onChange={(e) => setStartNumber(Math.min(99, Math.max(1, e.target.value)))}
                        min="1"
                        max="99"
                    />
                    <input
                        type="number"
                        value={endNumber}
                        onChange={(e) => setEndNumber(Math.min(100, Math.max(2, e.target.value)))}
                        min="2"
                        max="100"
                    />
                    <button onClick={generateQrcodes}>產生 QR Code</button>
                    <button onClick={clear}>清空</button>
                </div>
                <div className="QrCodeCon">
                    {qrcodes.map((qrcode) => (
                        <div key={qrcode.url}>
                            <QRCode className="qrcode" value={qrcode.url} size={100} />
                            <p>{qrcode.index}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default QRcode;
