import { useState } from 'react';
import './style/patirtis.scss';
import sky from '../assets/sky.gif';

export default function Patirtis() {
    const [activeTab, setActiveTab] = useState('education');

    const education = [
        {
            year: '2024-08-01 - 2025-02-01',
            title: 'Full stack programavimo kursai',
            school: ' Baltijos technologiju institutas',
            description: 'Išklausiau 880valandu kursus apie full stack developinima .'
        },

        {
            year: '2013 - 2016',
            title: 'Transporto Logistika',
            school: ' Vilniaus Technologijų ir Dizaino kolegija ',
            description: 'Studijavau  transporto logistika , vadyba ir duomenų analizę.'
        },
        {
            year: '2009 - 2013',
            title: 'Vidurinis',
            school: 'Vilniaus Laisvės gimnazija',
            description: 'Baigiau gimnnazija.'
        }
    ];

    const experience = [
        {
            year: '2024 - dabar',
            title: 'Frontend Developer',
            company: 'Tech Company',
            description: 'Kuriu modernias web aplikacijas naudojant React ir JavaScript.'
        },

        {
            year: '2018 - 2023',
            title: 'Vidaus apdaila ',
            company: 'Individuali veikla',
            description: 'Įrenginejau namus ir padejau žnonem su dizainu.'
        },


        {
            year: '2016 - 2018',
            title: 'Vadybininkas ',
            company: 'EXP Logistics',
            description: 'Dirbau dokumentacija ir pervežejais .'
        }
    ];

    return (
        <section className="patirtis" id="experience" >
            <div className="patirtis-container">
                <h2>Patirtis ir išsilavinimas</h2>

                <div className="tabs">
                    <button
                        className={`tab ${activeTab === 'education' ? 'active' : ''}`}
                        onClick={() => setActiveTab('education')}
                    >
                        Išsilavinimas
                    </button>
                    <button
                        className={`tab ${activeTab === 'work' ? 'active' : ''}`}
                        onClick={() => setActiveTab('work')}
                    >
                        Darbo patirtis
                    </button>

                </div>


                <div className="timeline">
                    {activeTab === 'education' ? (
                        education.map((item, index) => (
                            <div key={index} className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <span className="year">{item.year}</span>
                                    <h3>{item.title}</h3>
                                    <h4>{item.school}</h4>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        experience.map((item, index) => (
                            <div key={index} className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <span className="year">{item.year}</span>
                                    <h3>{item.title}</h3>
                                    <h4>{item.company}</h4>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}