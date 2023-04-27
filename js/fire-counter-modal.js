class FireCounterModal extends Monogatari.Component {

    static setup() {
        this.engine.translation('Русский', {
            'FireCounter': 'Fire'
        });

        //*this.engine.component('quick-menu').addButtonAfter('Hide', {
        //*    string: 'FireCounter',
        //*    icon: 'fas fa-tasks',
        //*    data: {
            //*    action: 'firecounter'
         //*   }
      //*  });
        return Promise.resolve();
    }

    static bind() {
        this.engine.registerListener('firecounter', {
            callback: () => {
                this.instances((element) => {
                    element.classList.toggle('modal--active');
                    element.forceRender ();
                });
            }
        });
    }

    static onLoad() {
        this.instances((element) => {
            element.forceRender();
        });
        return Promise.resolve();
    }

    constructor (...args) {
        super (...args);

        this.props = {
            max: 9,
            icon: 'fa-fire'
        };
    }


    willMount() {
        this.classList.add('modal');
        return Promise.resolve();
    }

    render() {
        const inventory = this.engine.storage().player.inventory;

        const items = [];

        // Init the number of item with the initial value settings

        for (let i = 0; i < this.props.max; i++) {
            items.push (`<i class="fas ${this.props.icon}"></i>`);
        }

        return `
            <div data-component="modal" class="modal__content3">
                
                <div class="input-range">
                    <div id="labels-list" class="labels" data-value="${player.inventory.life}">
                        ${items.join('')}
                    </div>
                </div>
            <button data-action="firecounter">Close</button> 
            </div>
        `;
    }
}