import React, {useState} from 'react';
import styles from '../Scoresheet.module.css';

function Player(props) {

    const [state, setState] = React.useState({
        ones: 0,
        twos: 0,
        threes: 0,
        fours: 0,
        fives: 0,
        sixes: 0,
        upperBonus: false,
        threeOfAKind: 0,
        fourOfAKind: 0,
        fullHouse: 0,
        lowStraight: false,
        highStraight: false,
        yahtzee: false,
        chance: 0
    });

    const [upperTotal, setUpperTotal] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0);


    const handleChange = (event) => {

        console.log("Change");

        const value = event.target.value;
        const isUpper = event.target.getAttribute('upper');

        console.log('value: ', value, ' isUpper: ', isUpper);

        setState({
            ...state,
            [event.target.name]: value
        });

        if(isUpper){
            setUpperTotal(parseInt(state.ones) + parseInt(state.twos));
        }

        //Update grand total
        setGrandTotal(parseInt(state.ones) + parseInt(state.twos));

    }

    const activateValue = (event) => {
        const value = event.target.getAttribute('activevalue');
        setState({
            ...state,
            [event.target.name]: value
        });

    }

    return (

    <div className="playerInputs">

        <div className={styles.row}>
            <h3>{props.playerName}</h3>
        </div>

        <div className={styles.row}>
            <input 
                name="ones"
                type="number"
                min="0"
                upper="true"
                className={styles.playerInput}
                value={state.ones}
                onChange={handleChange}
            />
        </div>

        <div className={styles.row}>
            <input 
                name="twos"
                type="number" 
                min="0"
                upper="true"
                className={styles.playerInput}
                value={state.twos}
                onChange={handleChange}
            />
        </div>
        <div className={styles.row}>
            <input 
                name="threes" 
                type="number" 
                min="0"
                upper="true"
                className={styles.playerInput}
                value={state.threes}
                onChange={handleChange}
            />
        </div>
        <div className={styles.row}>
            <input 
                name="fours" 
                type="number" 
                min="0"
                upper="true"
                className={styles.playerInput}
                value={state.fours}
                onChange={handleChange}
            />
        </div>
        <div className={styles.row}>
            <input 
                name="fives" 
                type="number"
                min="0"
                upper="true"
                className={styles.playerInput}
                value={state.fives}     
                onChange={handleChange}
            />
        </div>
        <div className={styles.row}>
            <input 
                name="sixes" 
                className={styles.playerInput}
                type="number" 
                min="0"
                value={state.sixes}
                upper="true"
                onChange={handleChange}
            />
        </div>
        <div className={styles.row}>
            <input 
                name="upperTotal" 
                type="number"
                min="0"
                className={styles.playerInput}  
                value={upperTotal}
                readOnly 
            />
        </div>
        <div className={styles.row}>
            <input 
                name="upperBonus" 
                type="number"
                min="0"
                activevalue="35"
                className={styles.playerInput}
                readOnly 
            />
        </div>
        <div className={styles.row}>
            <input 
                name="upperGrandTotal" 
                type="number" 
                min="0"
                value=""
                className={styles.playerInput}
                readOnly 
            />
        </div>
        <div className={styles.row}>
            <input 
                name="threeOfAKind" 
                type="number" 
                min="0"
                upper="false"
                className={styles.playerInput}
                value={state.threeOfAKind}
                onChange={handleChange}
            />
        </div>
        <div className={styles.row}>
            <input 
                name="fourOfAKind" 
                placeholder="0"
                type="number" 
                min="0"
                upper="false"
                className={styles.playerInput}
                value={state.fourOfAKind}
                onChange={handleChange}
            />
        </div>
        <div className={styles.row}>
            <input 
                name="fullHouse" 
                type="number" 
                min="0"
                upper="false"
                className={styles.playerInput}
                value={state.fullHouse}
                onChange={handleChange}
            />
        </div>
        <div className={styles.row}>
            <input 
                name="lowStraight" 
                type="checkbox"
                value=""
                activevalue="30"
                className={styles.playerInput}
                onChange={activateValue}
            />
        </div>
        <div className={styles.row}>
            <input 
                name="highStraight" 
                type="checkbox"
                value=""
                activevalue="40"
                upper="false"
                className={styles.playerInput}
                onChange={activateValue}
            />
        </div>
        <div className={styles.row}>
            <input 
                name="yahtzee" 
                type="checkbox"
                value=""
                activevalue="50"
                upper="false"
                className={styles.playerInput}
                onChange={activateValue}
            />
        </div>
        <div className={styles.row}>
            <input 
                name="chance" 
                type="number" 
                min="0"
                upper="false"
                className={styles.playerInput}
                value={state.chance}
                onChange={handleChange}
            />
        </div>
        <div className={styles.row}>
            <input 
                name="grandTotal" 
                type="number" 
                min="0"
                className={styles.playerInput}
                value={grandTotal}
                readOnly 
            />
        </div>    
    </div>

    );
}

export default Player;
