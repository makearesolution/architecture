import React from 'react';
import {useState} from 'react';

const Bolovsrol = () => {
    const [state, setState] = useState({
        bol_tuvshin1: '',
        bol_uls1: '',
        bol_hot1: '',
        bol_schoolname1: '',
        bol_elssen_ognoo1: null,
        bol_tugssun_ognoo1: null,
        bol_dip_dug1: '',
        bol_mergejil1: '',
        bol_dun1: '',
        bol_tuvshin2: '',
        bol_uls2: '',
        bol_hot2: '',
        bol_schoolname2: '',
        bol_elssen_ognoo2: null,
        bol_tugssun_ognoo2: null,
        bol_dip_dug2: '',
        bol_mergejil2: '',
        bol_dun2: '',
        bol_tuvshin3: '',
        bol_uls3: '',
        bol_hot3: '',
        bol_schoolname3: '',
        bol_elssen_ognoo3: null,
        bol_tugssun_ognoo3: null,
        bol_dip_dug3: '',
        bol_mergejil3: '',
        bol_dun3: '',
        staff_id_id: null,
    });
    const [bolov, setBolov] = useState({
        bolov1: false,
        bolov2: false,
        bolov3: false,
    });
    const addBolov = () => {
        console.log("hewleech");
        if (bolov.bolov1 === false) {
            setBolov({...bolov, bolov1: true});
            return;
        }
        if (bolov.bolov2 === false) {
            setBolov({...bolov, bolov2: true});
            return;
        }
        if (bolov.bolov3 === false) {
            setBolov({...bolov, bolov3: true});
            return;
        }
    };
    return (
        <div>
            <button onClick={addBolov}> Боловсрол нэмэх </button>
            <form>
                {bolov.bolov1 && (
                    <div>
                        <h1> Боловсрол 1 </h1>
                        <p> Боловсролын төвшин ЕРӨНХИЙ </p>
                        <input id='bol_tuvshin1' type='text' value={state.bol_tuvshin1}/>
                        <p> Ерөнхий боловсрол эзэмшсэн улс </p>
                        <input id='bol_uls1' type='text' value={state.bol_uls1}/>
                        <p> Ерөнхий боловсрол эзэмшсэн Хот, Аймаг </p>
                        <input id='bol_hot1' type='text' value={state.bol_hot1}/>
                        <p> Ерөнхий боловсролын сургуулийн нэр </p>
                        <input id='bol_schoolname1' type='text' value={state.bol_schoolname1}/>

                        <p> Ерөнхий боловсролын сургуульд элссэн огноо yyyy.mm.dd </p>
                        <input id='bol_elssen_ognoo1' type='date' value={state.bol_elssen_ognoo1}/>
                        <p> Ерөнхий боловсролын сургууль төгссөн огноо yyyy.mm.dd </p>
                        <input id='bol_tugssun_ognoo1' type='date' value={state.bol_tugssun_ognoo1}/>

                        <p> Дипломны дугаар </p>
                        <input id='bol_dip_dug1' type='text' value={state.bol_dip_dug1}/>
                        <p> Мэргэжил </p>
                        <input id='bol_mergejil1' type='text' value={state.bol_mergejil1}/>
                        <p> Голч дүн </p>
                        <input id='bol_dun1' type='text' value={state.bol_dun1}/>
                    </div>
                )}
                {bolov.bolov2 &&
                (<div>
                    <h1> Боловсрол 2 </h1>
                    <p> Боловсролын төвшин ЕРӨНХИЙ </p>
                    <input id='bol_tuvshin2' type='text' value={state.bol_tuvshin2}/>
                    <p> Ерөнхий боловсрол эзэмшсэн улс </p>
                    <input id='bol_uls2' type='text' value={state.bol_uls2}/>
                    <p> Ерөнхий боловсрол эзэмшсэн Хот, Аймаг </p>
                    <input id='bol_hot2' type='text' value={state.bol_hot2}/>
                    <p> Ерөнхий боловсролын сургуулийн нэр </p>
                    <input id='bol_schoolname2' type='text' value={state.bol_schoolname2}/>

                    <p> Ерөнхий боловсролын сургуульд элссэн огноо yyyy.mm.dd </p>
                    <input id='bol_elssen_ognoo2' type='date' value={state.bol_elssen_ognoo2}/>
                    <p> Ерөнхий боловсролын сургууль төгссөн огноо yyyy.mm.dd </p>
                    <input id='bol_tugssun_ognoo2' type='date' value={state.bol_tugssun_ognoo2}/>

                    <p> Дипломны дугаар </p>
                    <input id='bol_dip_dug2' type='text' value={state.bol_dip_dug2}/>
                    <p> Мэргэжил </p>
                    <input id='bol_mergejil2' type='text' value={state.bol_mergejil2}/>
                    <p> Голч дүн </p>
                    <input id='bol_dun2' type='text' value={state.bol_dun2}/>
                </div>)
                }
                {bolov.bolov3 &&
                (<div>
                    <h1> Боловсрол 3 </h1>
                    <p> Боловсролын төвшин ЕРӨНХИЙ </p>
                    <input id='bol_tuvshin3' type='text' value={state.bol_tuvshin3}/>
                    <p> Ерөнхий боловсрол эзэмшсэн улс </p>
                    <input id='bol_uls3' type='text' value={state.bol_uls3}/>
                    <p> Ерөнхий боловсрол эзэмшсэн Хот, Аймаг </p>
                    <input id='bol_hot3' type='text' value={state.bol_hot3}/>
                    <p> Ерөнхий боловсролын сургуулийн нэр </p>
                    <input id='bol_schoolname3' type='text' value={state.bol_schoolname3}/>

                    <p> Ерөнхий боловсролын сургуульд элссэн огноо yyyy.mm.dd </p>
                    <input id='bol_elssen_ognoo3' type='date' value={state.bol_elssen_ognoo3}/>
                    <p> Ерөнхий боловсролын сургууль төгссөн огноо yyyy.mm.dd </p>
                    <input id='bol_tugssun_ognoo3' type='date' value={state.bol_tugssun_ognoo3}/>

                    <p> Дипломны дугаар </p>
                    <input id='bol_dip_dug3' type='text' value={state.bol_dip_dug3}/>
                    <p> Мэргэжил </p>
                    <input id='bol_mergejil3' type='text' value={state.bol_mergejil3}/>
                    <p> Голч дүн </p>
                    <input id='bol_dun3' type='text' value={state.bol_dun3}/>
                </div>)
                }
                <input type='submit' value='Хадгалах'/>
            </form>
        </div>
    );
};

export default Bolovsrol;