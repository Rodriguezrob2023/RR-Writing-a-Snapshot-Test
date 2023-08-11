import React from "react"
import Card from "react-bootstrap/Card"
import Roberto from './Roberto.jpg'

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
        {/* Use your GitHub info instead, but Mickey Mouse is used as an example */}
        <Card.Img variant="top" src={Roberto} />
        {/* Source: https://github.com/Rodriguezrob2023 */}
        <Card.Body>
            <Card.Title>Roberto Rodriguez</Card.Title>
            <Card.Text>
            I am a current software development student UNLV.
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard