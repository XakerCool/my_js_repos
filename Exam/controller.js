class Controller {
    model;
    view;

    constructor (model, view) {
        this.model = model;
        this.view = view;
        this.view.setController(this);
    
        this.render();
    }

    render() {
        this.view.render();
    }
}