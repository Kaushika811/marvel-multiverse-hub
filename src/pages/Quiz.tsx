import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Clock, Trophy, Zap } from "lucide-react";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10); // 10 seconds per question
  const [quizComplete, setQuizComplete] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);

  const questions = [
    {
      question: "What is the real name of Iron Man?",
      options: ["Bruce Wayne", "Tony Stark", "Peter Parker", "Steve Rogers"],
      correctAnswer: 1
    },
    {
      question: "Which Infinity Stone is hidden on Vormir?",
      options: ["Power Stone", "Time Stone", "Soul Stone", "Reality Stone"],
      correctAnswer: 2
    },
    {
      question: "What is the name of Thor's hammer?",
      options: ["Stormbreaker", "Mjolnir", "Gungnir", "Jarnbjorn"],
      correctAnswer: 1
    },
    {
      question: "Who founded the X-Men?",
      options: ["Magneto", "Wolverine", "Professor X", "Cyclops"],
      correctAnswer: 2
    },
    {
      question: "What year was the first Marvel comic published?",
      options: ["1939", "1941", "1945", "1950"],
      correctAnswer: 0
    }
  ];

  useEffect(() => {
    if (quizComplete || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleNextQuestion();
          return 10; // Reset timer for next question
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, quizComplete, currentQuestion]);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    const newAnswers = [...answers, selectedAnswer || -1];
    setAnswers(newAnswers);

    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setTimeLeft(10);
    } else {
      setQuizComplete(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setTimeLeft(10);
    setQuizComplete(false);
    setAnswers([]);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (quizComplete) {
    const percentage = Math.round((score / questions.length) * 100);
    const getScoreMessage = () => {
      if (percentage >= 80) return "🏆 Marvel Expert!";
      if (percentage >= 60) return "⚡ True Believer!";
      if (percentage >= 40) return "🦸 Getting There!";
      return "📚 Study More Comics!";
    };

    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card className="card-gradient border-border animate-glow">
                <CardContent className="p-8 text-center">
                  <Trophy className="w-16 h-16 mx-auto mb-6 text-secondary" />
                  
                  <h2 className="font-orbitron font-black text-3xl mb-4 text-gradient">
                    Quiz Complete!
                  </h2>
                  
                  <div className="text-6xl font-black mb-4 text-primary">
                    {score}/{questions.length}
                  </div>
                  
                  <p className="text-xl mb-2 text-secondary font-bold">
                    {getScoreMessage()}
                  </p>
                  
                  <p className="text-muted-foreground mb-8">
                    You scored {percentage}% on this Marvel Universe quiz!
                  </p>
                  
                  <div className="space-y-4">
                    <Button 
                      onClick={resetQuiz}
                      className="w-full hero-gradient text-white font-medium py-3"
                    >
                      Try Again
                    </Button>
                    
                    <Button 
                      variant="outline"
                      className="w-full"
                      onClick={() => window.location.href = '/'}
                    >
                      Back to Home
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="font-orbitron font-black text-5xl md:text-6xl mb-6">
              <span className="text-gradient">MARVEL QUIZ</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Test your knowledge of the Marvel Universe! Answer 5 questions with 10 seconds each.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Progress & Timer */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-muted-foreground">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <div className="flex items-center gap-2 text-primary">
                  <Clock className="w-4 h-4" />
                  <span className="font-mono font-bold">{formatTime(timeLeft)}</span>
                </div>
              </div>
              
              <Progress 
                value={((currentQuestion) / questions.length) * 100} 
                className="mb-4"
              />
            </div>

            {/* Question Card */}
            <Card className="card-gradient border-border">
              <CardHeader>
                <CardTitle className="font-orbitron font-bold text-2xl text-primary flex items-center gap-2">
                  <Zap className="w-6 h-6" />
                  {questions[currentQuestion].question}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    variant={selectedAnswer === index ? "default" : "outline"}
                    className={`w-full p-4 text-left justify-start h-auto ${
                      selectedAnswer === index ? "hero-gradient text-white" : ""
                    }`}
                    onClick={() => handleAnswerSelect(index)}
                  >
                    <span className="font-medium mr-4">
                      {String.fromCharCode(65 + index)}.
                    </span>
                    {option}
                  </Button>
                ))}
                
                <div className="pt-6">
                  <Button
                    onClick={handleNextQuestion}
                    disabled={selectedAnswer === null}
                    className="w-full hero-gradient text-white font-medium py-3"
                  >
                    {currentQuestion + 1 === questions.length ? "Finish Quiz" : "Next Question"}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Score Display */}
            <div className="mt-8 text-center">
              <Card className="inline-block card-gradient border-border">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <Trophy className="w-6 h-6 text-secondary" />
                    <span className="font-orbitron font-bold text-lg">
                      Score: {score}/{questions.length}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Quiz;