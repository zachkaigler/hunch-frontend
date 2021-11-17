import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import Please from "pleasejs"

const QuestionStatCard = ({ question, responses }) => {
    // TODO: add handling for questions with no answers
    const answers = responses.map(r => r.answers.find(a => a.questionId === question.id))
    const answersFiltered =  answers.filter(a => a !== undefined)
    const chartData = question.answers.map(a => {
        return {
            title: a.label,
            value: answersFiltered.filter(a2 => a2.answer === a.label).length,
            color: Please.make_color()
        }
    })

    const generateLabel = (data) => {
        if (data.value === 0) {
            return null
        } else {
            return `${Math.round(data.percentage)}%`
        }
    }

    return (
        <div className="question-stat-card">
            <p>{question.id}. {question.prompt}</p>
            <div className="chart-container">
                <PieChart 
                    data={chartData}
                    label={({ dataEntry }) => generateLabel(dataEntry)}
                    labelStyle={(index) => ({
                        fill: chartData[index].color,
                        fontSize: '.5rem',
                        fontFamily: 'sans-serif',
                        overflowWrap: 'anywhere',
                    })}
                    labelPosition={112}
                    animate={true}
                    animationDuration={500}
                    animationEasing="ease-in"
                />
            </div>
        </div>
    )
}

export default QuestionStatCard
