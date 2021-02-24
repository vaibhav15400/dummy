import React from 'react';
import'./Quiz.css';

const Quiz =()=>(
    <>
     <div class="main-block">
      <form action="/">
        <h1>QUIZ</h1>
        <h4>COURSE NAME</h4>
        <input type="text"/>
        <h4>E-MAIL</h4>
        <input type="email"/>
        <h4>DATE-OF-BIRTH</h4>
        <input type="text"/>
        <h5>All Question Are Nessary</h5>
        <h5>All Each Question Contains Equal Amount Of Marks</h5>
        <h5>All Question are nessary</h5>
        <div>
          <h4>Untitled</h4>
          <table>
          
            <tr>
              <td class="first-col">1.The voltage out of an ideal voltage source is.</td>
              <td><input type="radio" value="none" name="interest" />Zero</td>
              <td><input type="radio" value="none" name="interest" />Constant</td>
              <td><input type="radio" value="none" name="interest" />Load resistance dependent</td>
              <td><input type="radio" value="none" name="interest" />Internal resistance dependent</td>
              <td><input type="radio" value="none" name="interest" />None of above</td>
            </tr>
            <tr>
              <td class="first-col">2.The current out of an ideal current source is.</td>
              <td><input type="radio" value="none" name="interest" />Zero</td>
              <td><input type="radio" value="none" name="interest" />Constant</td>
              <td><input type="radio" value="none" name="interest" />Load resistance dependent</td>
              <td><input type="radio" value="none" name="interest" />Internal resistance dependent</td>
              <td><input type="radio" value="none" name="interest" />None of above</td>
            </tr>
            <tr>
              <td class="first-col">3.The path between two points along which an electrical current can be carried is called</td>
              <td><input type="radio" value="none" name="organized" />A network</td>
              <td><input type="radio" value="none" name="organized" />A relay</td>
              <td><input type="radio" value="none" name="organized" />A circuit</td>
              <td><input type="radio" value="none" name="organized" />A loop</td>
              <td><input type="radio" value="none" name="organized" />None of above</td>
            </tr>
            <tr>
              <td class="first-col">4. The formula for current as per Ohm’s Law is</td>
              <td><input type="radio" value="none" name="encouraged" />Voltage / Resistance</td>
              <td><input type="radio" value="none" name="encouraged" />Resistance * Voltage</td>
              <td><input type="radio" value="none" name="encouraged" />Voltage + Resistance</td>
              <td><input type="radio" value="none" name="encouraged" /> Resistance / Voltage</td>
              <td><input type="radio" value="none" name="encouraged" />None of above</td>
            </tr>
            <tr>
              <td class="first-col"> The unit of electrical resistance is</td>
              <td><input type="radio" value="none" name="demonstrated" />voltage</td>
              <td><input type="radio" value="none" name="demonstrated" />Amp</td>
              <td><input type="radio" value="none" name="demonstrated" />Ohm</td>
              <td><input type="radio" value="none" name="demonstrated" />Coulomb</td>
              <td><input type="radio" value="none" name="demonstrated" />None of above</td>
            </tr>
            <tr>
              <td class="first-col">6.In a constant voltage DC circuit, when the resistance increases, the current will</td>
              <td><input type="radio" value="none" name="appeared" />Decrease</td>
              <td><input type="radio" value="none" name="appeared" />Increase</td>
              <td><input type="radio" value="none" name="appeared" />Stop</td>
              <td><input type="radio" value="none" name="appeared" />Reamins constant</td>
              <td><input type="radio" value="none" name="appeared" />None of above</td>
            </tr>
            <tr>
              <td class="first-col">7. The unit of Power is</td>
              <td><input type="radio" value="none" name="used" />Amp</td>
              <td><input type="radio" value="none" name="used" />Watt</td>
              <td><input type="radio" value="none" name="used" />Voltage</td>
              <td><input type="radio" value="none" name="used" />Ohm</td>
              <td><input type="radio" value="none" name="used" />None of above</td>
            </tr>
            <tr>
              <td class="first-col">8.Number of valence electrons in a silicon atom are</td>
              <td><input type="radio" value="none" name="challenged" />04</td>
              <td><input type="radio" value="none" name="challenged" />03</td>
              <td><input type="radio" value="none" name="challenged" />12</td>
              <td><input type="radio" value="none" name="challenged" />15</td>
              <td><input type="radio" value="none" name="challenged" />None of above</td>
            </tr>
          </table>
        </div>
        <p class="question">9. 	
A reverse biased diode will act as an open switch..</p>
        <div class="question-answer">
          <label><input type="radio" value="none" name="accessible" /> yes</label>
          <label><input type="radio" value="none" name="accessible" /> no</label>
        </div>
        <p class="question">10.	
If the diode in a series circuit is reverse biased, the resistor will drop all the applied voltage.</p>
        <div class="question-answer">
          <label><input type="radio" value="none" name="actively" /> yes</label>
          <label><input type="radio" value="none" name="actively" /> no</label>
        </div>
        <div class="btn-block">
          <button type="submit" href="/">Send</button>
        </div>
      </form>
    </div>
  
    </>
)

 export default Quiz;