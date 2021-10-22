import React, { useState } from 'react'


function BadgeForm() {
    const [inputs, setInputs] = useState('')
    return (
        <div className='root'>
            <header class="ccheader">
                <h1>Print Name Badge Here</h1>
            </header>
            <div class="wrapper">
                <form method="post" action="" class="ccform">
                    <div class="ccfield-prepend">
                        <span class="ccform-addon"><i class="fa fa-user fa-2x"></i></span>
                        <input class="ccformfield" type="text" placeholder="First Name" />
                    </div>
                    <div class="ccfield-prepend">
                        <span class="ccform-addon"><i class="fa fa-user fa-2x"></i></span>
                        <input class="ccformfield" type="text" placeholder="Last Name" />
                    </div>
                    <div class="ccfield-prepend">
                        <span class="ccform-addon"><i class="fa fa-envelope fa-2x"></i></span>
                        <input class="ccformfield" type="text" placeholder="Email" />
                    </div>
                    <div class="ccfield-prepend">
                        <span class="ccform-addon"><i class="fa fa-mobile-phone fa-2x"></i></span>
                        <input class="ccformfield" type="text" placeholder="Phone" />
                    </div>
                    <div class="ccfield-prepend">
                        <span class="ccform-addon"><i class="fa fa-info fa-2x"></i></span>
                        <input class="ccformfield" type="text" placeholder="Place Of Birth" />
                    </div>
                    <div class="ccfield-prepend">
                        <span class="ccform-addon"><i class="fa fa-info fa-2x"></i></span>
                        <input class="ccformfield" type="text" placeholder="Favorite Food" />
                    </div>
                    <div class="ccfield-prepend">
                        <span class="ccform-addon"><i class="fa fa-comment fa-2x"></i></span>
                        <textarea class="ccformfield" name="comments" rows="8" placeholder="Tell Us About YourSelf"></textarea>
                    </div>
                    <div class="ccfield-prepend">
                        <input class="ccbtn" type="submit" value="Submit" />
                    </div>
                </form>
            </div>

            <div class="print">
                <h2 className='output'>NEW BADGE PREVIEW</h2>
                {inputs}
            </div>
        </div>
    )
}

export default BadgeForm
