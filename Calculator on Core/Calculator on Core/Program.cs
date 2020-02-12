using System;
using System.Linq.Expressions;
using System.Text.RegularExpressions;

namespace Calculator_on_Core
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("7");;
            string line = Console.ReadLine();
            Console.WriteLine($"This is what you typed {line}");
            try
            {
                var patternNum = new Regex(@"[^0-9\.]+");
                var patternOperator = new Regex(@"[\+\-\*\/]");
                var numMatch = patternNum.Split(line);
                string op = patternOperator.Match(line).Value;
                var convertedNumMatch = Array.ConvertAll(numMatch, s => Decimal.Parse(s));

                Console.WriteLine($"{convertedNumMatch[0]} {op} {convertedNumMatch[1]}");

                decimal result = Calculate(convertedNumMatch[0], convertedNumMatch[1], op);

                Console.WriteLine($"Result is: {result}");
            }
            catch(Exception e)
            {
                Console.WriteLine($"{e}");
            }

            decimal Calculate(decimal number1, decimal number2, string operatorString)
            {
                decimal result;
                switch (operatorString) { 
                
                    case "+":
                        result = Decimal.Add(number1, number2);
                        return result;
                    case "-":
                        result = Decimal.Subtract(number1, number2);
                        return result;
                    case "*":
                        result = Decimal.Multiply(number1, number2);
                        return result;
                    case "/":
                        result = Decimal.Divide(number1, number2);
                        return result;
                    default:
                        throw new Exception("One of the following required operators was not used: + - * /");
                }
            }
        }
    }
}
