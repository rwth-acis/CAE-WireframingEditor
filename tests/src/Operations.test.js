import {
    expect
} from 'chai';
import CONST from '../../src/js/misc/Constants.js';
import {mxRectangle} from '../../src/js/misc/mxExport.js';

export default function (editor) {
    describe('Test Operations on the Wireframe', function () {
        var uiId;
        describe('Create a Button in the middle of the Cavnas', function () {

            before(function () {
                var Button = editor.getUIComponentFromHTMLName('button');
                var btn = new Button();
                uiId = btn.dropElementCallback(editor.graph, null, null, 250, 250);
            });

            it('Check the id and the constructor', function () {
                var cell = editor.graph.model.getCell(uiId);
                expect(uiId).to.be.equal(cell.id);
                expect(cell.constructor.name).to.be.equal('Button');
            });

            it('Check geometry of the created cell', function () {
                var cell = editor.graph.model.getCell(uiId);
                expect(cell.geometry.x).to.be.equal(250);
                expect(cell.geometry.y).to.be.equal(250);
            });
        });

        describe('Move the button', function () {
            before(function () {
                var cell = editor.graph.model.getCell(uiId);
                editor.graph.moveCells([cell], 50, 50);
            });

            it('Check if moved correctly', function () {
                var cell = editor.graph.model.getCell(uiId);
                expect(cell.geometry.x).to.be.equal(300);
                expect(cell.geometry.y).to.be.equal(300);
            });

        });

        describe('Undo the move', function () {
            before(function(){
                var cell = editor.graph.model.getCell(uiId);                
                editor.execute(CONST.ACTIONS.SHARED.UNDO, cell);
            });

            it('Check if undone correctly', function () {
                var cell = editor.graph.model.getCell(uiId);
                expect(cell.geometry.x).to.be.equal(250);
                expect(cell.geometry.y).to.be.equal(250);
            });
            
        });

        describe('Redo the move', function () {
            before(function(){
                var cell = editor.graph.model.getCell(uiId);                
                editor.execute(CONST.ACTIONS.SHARED.REDO, cell);
            });

            it('Check if redone correctly', function () {
                var cell = editor.graph.model.getCell(uiId);
                expect(cell.geometry.x).to.be.equal(300);
                expect(cell.geometry.y).to.be.equal(300);
            });
            
        });

        describe('Resize the cell', function(){
            var oldWidth, oldHeight;
            before(function(){
                var cell = editor.graph.model.getCell(uiId);
                oldWidth = cell.geometry.width;
                oldHeight = cell.geometry.height;
                editor.graph.resizeCells([cell], [new mxRectangle(cell.geometry.x,cell.geometry.y, oldWidth + 20, oldHeight + 20)]);

            });

            it('Check if resized correctly', function(){
                var cell = editor.graph.model.getCell(uiId);                
                expect(cell.geometry.width).to.be.equal(oldWidth + 20);
                expect(cell.geometry.height).to.be.equal(oldHeight + 20);
            });
        });

        describe('Undo the resize', function () {
            before(function(){
                var cell = editor.graph.model.getCell(uiId);                
                editor.execute(CONST.ACTIONS.SHARED.UNDO, cell);
            });

            it('Check if undone correctly', function () {
                var cell = editor.graph.model.getCell(uiId);
                expect(cell.geometry.width).to.be.equal(100);                
                expect(cell.geometry.height).to.be.equal(50);
            });
            
        });

        describe('Redo the resize', function () {
            before(function(){
                var cell = editor.graph.model.getCell(uiId);                
                editor.execute(CONST.ACTIONS.SHARED.REDO, cell);
            });

            it('Check if redone correctly', function () {
                var cell = editor.graph.model.getCell(uiId);
                expect(cell.geometry.width).to.be.equal(120);
                expect(cell.geometry.height).to.be.equal(70);
            });
            
        });

        describe('Group the button', function(){
            before(function(){
                var cell = editor.graph.model.getCell(uiId);                
                editor.execute(CONST.ACTIONS.SHARED.GROUP, cell);
            });

            it('Check if the element is in a div container now', function () {
                var cell = editor.graph.model.getCell(uiId);
                expect(cell.parent.constructor.name).to.be.equal('DivContainer');
            });
        });


        describe('Ungroup the button', function(){
            before(function(){
                var cell = editor.graph.model.getCell(uiId);                
                editor.execute(CONST.ACTIONS.SHARED.UNGROUP, cell.parent);
            });

            it('Check if the parent is the default parent', function () {
                var cell = editor.graph.model.getCell(uiId);
                expect(cell.parent.constructor.name).to.be.equal('mxCell');
                expect(cell.parent.id).to.be.equal('1');
            });
        });

        describe('Undo the ungrouping', function () {
            before(function(){
                var cell = editor.graph.model.getCell(uiId);                
                editor.execute(CONST.ACTIONS.SHARED.UNDO, cell);
            });

            it('Check if the element is in a div container now', function () {
                var cell = editor.graph.model.getCell(uiId);
                expect(cell.parent.constructor.name).to.be.equal('DivContainer');
            });
            
        });

        describe('Redo the grouping', function () {
            before(function(){
                var cell = editor.graph.model.getCell(uiId);                
                editor.execute(CONST.ACTIONS.SHARED.REDO, cell);
            });

            it('Check if the parent is the default parent', function () {
                var cell = editor.graph.model.getCell(uiId);
                expect(cell.parent.constructor.name).to.be.equal('mxCell');
                expect(cell.parent.id).to.be.equal('1');
            });
            
        });

        describe('Delete the button', function () {
            before(function () {
                var cell = editor.graph.model.getCell(uiId);                
                editor.execute(CONST.ACTIONS.SHARED.DELETE, cell);
            });

            it('Cell should deleted', function () {
                var cell = editor.graph.model.getCell(uiId);
                expect(cell).to.be.undefined;
            });
        });
    });

}