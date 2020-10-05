<!DOCTYPE html>
<html lang="fr" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Time unit converter</title>
  </head>
  <body>
    <label for="numberOfYears">Enter a number of years here:</label><br>
    <input type="number" name"numberOfYears" id="numberOfYears">
    <input type="submit" value="convert" id="convert">
    <p id="resultSeconds"></p>
    <p id="resultMinutes"></p>
    <p id="resultHours"></p>
    <p id="resultDays"></p>
    <br><br><br><br>


    <label>Choose your units and enter a value to convert:</label><br>
    <select id="unitChosen" name="unitChosen">
      <option value="years">Years</option>
      <option value="days">Days</option>
      <option value="hours">Hours</option>
      <option value="minutes">Minutes</option>
      <option value="seconds">Seconds</option>
    </select>
    <input type="number" name"numberChosen" id="numberChosen">
    <select id="unitChosenFinal" name="unitChosenFinal">
      <option value="years">Years</option>
      <option value="days">Days</option>
      <option value="hours">Hours</option>
      <option value="minutes">Minutes</option>
      <option value="seconds">Seconds</option>
    </select>
      <input type="submit" value="convert" id="convert2"><br>
      <p id="resultValue"></p>
    <script src="main3.js"></script>
  </body>
</html>
