<?php

use App\Http\Controllers\ItemController;


class ItemControllerTest extends PHPUnit_Framework_TestCase
{
    /**
     * @test
     */
    public function testStore()
    {
        $subject = new ItemController();
        $request = new \Illuminate\Http\Request();
        $request->title = 'test data';

        $itemMock = $this->createMock('App\models\Item');
        $itemMock->expects($this->once())->method('create')->with(['title' => 'test data']);

        $subject->store($request);
    }
}
