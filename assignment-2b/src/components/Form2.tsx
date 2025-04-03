function Form2() {
    return (
        <div className="bg-base-200 rounded-lg p-8 shadow-lg my-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-2" id="What-About-You">What About You?</h2>
            <p className="text-base-content mb-6" id="What-About-You-paragraph">
                Do you like winter sports? What is your favorite mountain?
            </p>
            
            <form className="space-y-6">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Your Name:</span>
                    </label>
                    <input 
                        type="text" 
                        className="input input-bordered w-full" 
                        id="name" 
                        name="name" 
                        required 
                    />
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Your Favorite Mountain:</span>
                    </label>
                    <input 
                        type="text" 
                        className="input input-bordered w-full" 
                        id="favorite-mountain" 
                        name="favorite-mountain" 
                        required 
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">What winter sports do you enjoy?</span>
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                        <label className="label cursor-pointer justify-start gap-2">
                            <input type="checkbox" className="checkbox" name="sports" value="snowboarding" />
                            <span className="label-text">Snowboarding</span>
                        </label>
                        <label className="label cursor-pointer justify-start gap-2">
                            <input type="checkbox" className="checkbox" name="sports" value="skiing" />
                            <span className="label-text">Skiing</span>
                        </label>
                        <label className="label cursor-pointer justify-start gap-2">
                            <input type="checkbox" className="checkbox" name="sports" value="snowshoeing" />
                            <span className="label-text">Snowshoeing</span>
                        </label>
                        <label className="label cursor-pointer justify-start gap-2">
                            <input type="checkbox" className="checkbox" name="sports" value="ice-skating" />
                            <span className="label-text">Ice Skating</span>
                        </label>
                    </div>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">What's your skill level?</span>
                    </label>
                    <div className="flex gap-6">
                        <label className="label cursor-pointer justify-start gap-2">
                            <input type="radio" className="radio" name="skill-level" value="beginner" />
                            <span className="label-text">Beginner</span>
                        </label>
                        <label className="label cursor-pointer justify-start gap-2">
                            <input type="radio" className="radio" name="skill-level" value="intermediate" />
                            <span className="label-text">Intermediate</span>
                        </label>
                        <label className="label cursor-pointer justify-start gap-2">
                            <input type="radio" className="radio" name="skill-level" value="advanced" />
                            <span className="label-text">Advanced</span>
                        </label>
                    </div>
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Favorite Resort:</span>
                    </label>
                    <select className="select select-bordered w-full" id="favorite-resort" name="favorite-resort" required>
                        <option value="">Select a resort</option>
                        <option value="vail">Vail</option>
                        <option value="whistler">Whistler</option>
                        <option value="aspen">Aspen</option>
                        <option value="park-city">Park City</option>
                        <option value="breckenridge">Breckenridge</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Tell me about your winter sports experience:</span>
                    </label>
                    <textarea 
                        className="textarea textarea-bordered h-32 w-full" 
                        id="experience" 
                        name="experience" 
                        placeholder="Share your favorite memories, tips, or stories about winter sports..."
                    />
                </div>

                <button type="submit" className="btn btn-primary w-full">
                    Share Your Story
                </button>
            </form>
        </div>
    )
}

export default Form2
