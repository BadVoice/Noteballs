<template>
    <div class="notes">

    <div class="card has-background-info-light p-4 mb-5">
        <div class="field">
            <div class="control has-icons-left has-icons-right">
                <input class="input is-danger" type="email" placeholder="Email input" value="hello@">
                <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right ">
                    <i class="fas fa-exclamation-triangle"></i>
                </span>
            </div>
            <p class="help is-danger">This email is invalid</p>
            </div>

            <div class="field">

            <div class="control">
        </div>
    </div>

    <div class="field">
        <div class="control">
            <textarea 
            class="textarea"
            placeholder="Add a new note" />
        </div>
    </div>

    <div class="field is-grouped is-grouped-right">
        <div class="control">
            <button class="button is-info">
            Add New Note
            </button>
        </div>
        <div class="control">
            <button class="button is-link is-light">Cancel</button>
        </div>
    </div>
    </div>

        

        <div 
            class="card mb-4"
        >
    <div class="card-content">
        <div class="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, dicta quis accusantium neque aspernatur magni sit minus atque voluptatem assumenda possimus consequatur corrupti iste asperiores necessitatibus sunt aliquam libero in?
        </div>
    </div>
    <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
    </footer>
</div>
    </div>
</template>