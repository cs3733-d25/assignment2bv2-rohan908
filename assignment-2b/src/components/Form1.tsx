


function Form1() {
    const labelStyle: string = "fieldset-label";
    const radioStyle: string = "radio radio-primary";

    return (
        <>
            <div data-theme="goblinpenguin" className="card bg-base-100 shadow-xl p-6 max-w-2xl mx-auto my-8 hover:bg-base-200">
                <div className="card-body">

                    <h2 className="text-2xl font-bold text-primary mb-4">
                        If you would like to join Cycling Club, fill out form below:
                    </h2>

                    {/*<fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">*/}
                    {/*    <legend className="fieldset-legend">Page details</legend>*/}


                        {/*<label className="fieldset-label">Title</label>*/}
                        {/*<input type="text" className="input" placeholder="My awesome page" />*/}


                    {/*<label>*/}
                    {/*    Text input: <input name="myInput" />*/}
                    {/*</label>*/}


                        <label className={labelStyle} >Enter Your Full Name: </label>
                        <input className="input" type="text" />
                        <br/>
                        <label className={labelStyle}>Enter Your Major: </label>
                        <input className="input" type="text"/>
                        <br/>


                        <h4 className="text-m font-bold text-primary mb-4" >Class Year</h4>
                        <input className={radioStyle} type="radio" name="year" value="2028"/>
                        <label htmlFor="2028">2028</label><br/>

                        <input className={radioStyle} type="radio" name="year" value="2027"/>
                        <label htmlFor="2027">2027</label><br/>

                        <input className={radioStyle} type="radio" name="year" value="2026"/>
                        <label htmlFor="2026">2026</label><br/>

                        <input className={radioStyle} type="radio" name="year" value="2025"/>
                        <label htmlFor="2025">2025</label><br/>

                        <h4 className="text-m font-bold text-primary mb-4" >Cycling Discipline</h4>

                        <input className="checkbox" type="checkbox" id="mountain" name="discipline" value="mountain"/>
                        <label htmlFor="mountain">Mountain Biking</label><br/>
                        <input className="checkbox" type="checkbox" id="gravel" name="discipline" value="gravel"/>
                        <label htmlFor="gravel">Gravel Biking</label><br/>
                        <input className="checkbox" type="checkbox" id="road" name="discipline" value="road"/>
                        <label htmlFor="road">Road Biking</label><br/>
                        <input className="checkbox" type="checkbox" id="commuting" name="discipline" value="commuting"/>
                        <label htmlFor="commuting">Commuting</label><br/>

                        <h4>Cycling Discipline</h4>
                        <textarea className="textarea"  name="comments">
                    </textarea><br/>

                        <label htmlFor="soup">Is cereal a soup?</label>
                        <select className="select" id="soup" name="soup">
                            <option value="0">Without a doubt!</option>
                            <option value="1">Absolutely!</option>
                            <option value="2">For sure!</option>
                            <option value="3">Certainly!</option>
                        </select><br/>

                    <button type="submit" className="btn btn-outline btn-info" > Submit!</button>


                </div>
            </div>
        </>

    );
}

export default Form1
