using my.bookshop as my from '../db/data-model';


service CatalogService {
    @readonly entity Books as projection on my.Books;
    action addRandomBook ( action: Integer) returns array of Books;
}