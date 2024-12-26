import React from 'react'

export default function About(props) {
    let myStyle = {
        backgroundColor: props.mode === 'light' ? 'rgb(248 248 248)' : '#adadad'
    }
    return (
        <div className='container details'>
            <h2 className='my-4'>About Us</h2>
            <div className="AboutUs text-dark" style={myStyle}>
                <p>Textify is one of the most powerful, secure and free websites containing various tools for helping with your daily tasks, such as online formatters, multiple text tools, such as to remove duplicates, extract text and much more. Enjoy all for free!</p>
            </div>
            <h2 className='my-4'>How It Works ?</h2>
            <div className="definition text-dark" style={myStyle}>
                <p>Dealing with texts is a common day-to-day activity. Here you can find all the text utilities to help you in performing your activity much faster. This includes tools to remove duplicates, specific strings accents from a text, sort lines, remove line breaks, and many others.</p>
            </div>
            <h2>Tools Available</h2>
            <div className='tools text-dark mb-4' style={myStyle}>
                <h5>Case Converters</h5>
                <p>This tool can be used to quickly convert your text to entirely UpperCase or entirely LowerCase.</p>

                <h5>Remove Extra Spaces</h5>
                <p>This tool can be used to remove extra spaces from a regular text input.</p>

                <h5>Remove Line Breaks</h5>
                <p>This tool can be used to remove line breaks in your text, converting multiple lines into a single one.</p>

                <h5>Copy To Clipboard</h5>
                <p>This tool can be used to copy the altered text to clipboard.</p>

                <h5>Text Count</h5>
                <p>This tool can be used to count how many characters and words a text has.</p>

                <h5>Reading Time</h5>
                <p>This tool can be used to calculate how much time it takes to read the text for a average reader.</p>
            </div>
        </div>
    )
}
