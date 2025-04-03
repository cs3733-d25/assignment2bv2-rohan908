function Form1() {
    const labelStyle: string = "fieldset-label";
    const radioStyle: string = "radio radio-primary justify-start gap-2";

    return (
        <>
            <div data-theme="goblinpenguin" className="card bg-base-200 shadow-xl p-6 max-w-2xl mx-auto my-8">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-primary mb-4">
                        If you would like to join Cycling Club, fill out form below:
                    </h2>

                    <div className="form-control w-full">
                        <label className={labelStyle}>Enter Your Full Name: </label>
                        <input className="input input-bordered w-full" type="text" />
                    </div>

                    <div className="form-control w-full">
                        <label className={labelStyle}>Enter Your Major: </label>
                        <input className="input input-bordered w-full" type="text"/>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-bold text-primary">Class Year</span>
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                            <label className="label cursor-pointer justify-start gap-2">
                                <input type="radio" className="radio" name="year" value="2028" />
                                <span className="label-text">2028</span>
                            </label>
                            <label className="label cursor-pointer justify-start gap-2">
                                <input type="radio" className="radio" name="year" value="2027" />
                                <span className="label-text">2027</span>
                            </label>
                            <label className="label cursor-pointer justify-start gap-2">
                                <input type="radio" className="radio" name="year" value="2026" />
                                <span className="label-text">2026</span>
                            </label>
                            <label className="label cursor-pointer justify-start gap-2">
                                <input type="radio" className="radio" name="year" value="2025" />
                                <span className="label-text">2025</span>
                            </label>
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-bold text-primary">Cycling Discipline</span>
                        </label>
                        <div className="space-y-2">
                            <label className="label cursor-pointer justify-start gap-2">
                                <input type="checkbox" className="checkbox" name="discipline" value="mountain" />
                                <span className="label-text">Mountain Biking</span>
                            </label>
                            <label className="label cursor-pointer justify-start gap-2">
                                <input type="checkbox" className="checkbox" name="discipline" value="gravel" />
                                <span className="label-text">Gravel Biking</span>
                            </label>
                            <label className="label cursor-pointer justify-start gap-2">
                                <input type="checkbox" className="checkbox" name="discipline" value="road" />
                                <span className="label-text">Road Biking</span>
                            </label>
                            <label className="label cursor-pointer justify-start gap-2">
                                <input type="checkbox" className="checkbox" name="discipline" value="commuting" />
                                <span className="label-text">Commuting</span>
                            </label>
                        </div>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Additional Comments</span>
                        </label>
                        <br/>
                        <textarea className="textarea textarea-bordered h-32" name="comments" placeholder="Share your thoughts about cycling..."></textarea>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Is cereal a soup?</span>
                        </label>
                        <select className="select select-bordered w-full" id="soup" name="soup">
                            <option value="0">Without a doubt!</option>
                            <option value="1">Absolutely!</option>
                            <option value="2">For sure!</option>
                            <option value="3">Certainly!</option>
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary w-full mt-6">Submit!</button>
                </div>
            </div>
        </>
    );
}

export default Form1
