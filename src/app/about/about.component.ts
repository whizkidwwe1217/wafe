import { Component } from "@angular/core";

@Component({
    selector: 'wfe-about',
    styles: [
        `
        img {
            border-top-left-radius: 50% 50%;
            border-top-right-radius: 50% 50%;
            border-bottom-right-radius: 50% 50%;
            border-bottom-left-radius: 50% 50%;
        }

        @import url("//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css");
.search { position: relative; }
.search input { text-indent: 24px; overflow-text-indent: 24px; }
.search .fa-search { 
  position: absolute;
  top: 6px;
  left: 6px;
  font-size: 12px;
}
        `
    ],
    template:
    `
    <wfe-shape-input></wfe-shape-input>
    <h1>About codeblocks</h1>
    <br>
    <div class="row flex-items-sm-center">
        <div class="col-sm-4" style="text-align: center">
            <h1 style="color: #483654">
                <span>
                    <clr-icon size=240 shape="blocks-group"></clr-icon>
                     kodeblocks
                </span>
            </h1>
        </div>
        <div class="col-sm-6">
            <p><b>kodeblocks</b> - We came up with the name kodeblocks based on a concept of modular programming paradigm which is a technique of developing software by separating the functionality of a program into small and independent modules that are merged into one to get into the final working software. In the business side, this forces us to think more deeply about how we provide solutions to a huge business requirements by dividing and separating them into its smaller constituent components. Thus, we can design clear, simple, and independent solutions that are combined together to get the final requirements done in a shortest possible time.</p>
        </div>

        <div class="col-sm-6">
            <p><b>kodeblocks</b> - We came up with the name kodeblocks based on a concept of modular programming paradigm which is a technique of developing software by separating the functionality of a program into small and independent modules that are merged into one to get into the final working software. In the business side, this forces us to think more deeply about how we provide solutions to a huge business requirements by dividing and separating them into its smaller constituent components. Thus, we can design clear, simple, and independent solutions that are combined together to get the final requirements done in a shortest possible time.</p>
        </div>
        <div class="col-sm-4" style="text-align: center">
            <h1 style="color: #630E8E">
                <span>
                    <clr-icon size=240 shape="vm"></clr-icon>
                     kodeblocks
                </span>
            </h1>
        </div>
    </div>
    <br>
    <br>
    <br>
    <div class="row flex-items-large-center">
        <div class="col-sm-4" style="text-align: center">
            <img src="https://en.gravatar.com/userimage/109068507/ec51735f1bcf55ec980df6c4dd54d841.jpg" alt="image">
            <p>Wendell  started and continues to lead the kodeblocks project. He is involved in all stages of kodeblocks development. He loves engaging with designers and developers to understand their use cases and help them build solutions</p>
        </div>
        <div class="col-sm-4" style="text-align: center">
            <img src="https://en.gravatar.com/userimage/109068507/ec51735f1bcf55ec980df6c4dd54d841.jpg" alt="image">
            <p>Wayne contributes to the look and feel of kodeblocks and works on the code. Scott's our ace researcher and storyteller. He has captured the stories of why we did what we did and the assumptions we've made.</p>
        </div>
        <div class="col-sm-4" style="text-align: center">
            <img src="https://en.gravatar.com/userimage/109068507/ec51735f1bcf55ec980df6c4dd54d841.jpg" alt="image">
            <p>Estrada is the technical lead for kodeblocks. He spends most of his day working on the overall architecture of wafe as well as building Angular components for kodeblocks.</p>
        </div>
    </div>
    `
})
export class AboutComponent {}