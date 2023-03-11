<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\SingingSheetRequest;
use App\Models\SingingSheet;

class SingingSheetController extends Controller
{

    public function index()
    {
        $singingSheets = SingingSheet::all();
        return view('list', ['singingSheets' => $singingSheets]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('form');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SingingSheetRequest $request)
    {
        $singingSheet = new SingingSheet($request->validated());
        $singingSheet->save();
        return to_route('form.create')->with('success', '曲の登録が完了しました');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(SingingSheet $form)
    {
        return view('edit', ['form' => $form]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(SingingSheetRequest $request, $id)
    {
        $singingSheet = SingingSheet::findOrFail($id);
        $updateData = $request->validated();
        $singingSheet->update($updateData);

        return to_route('form.index')->with('success', '更新が完了しました');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $singingSheet = SingingSheet::findOrFail($id);
        $singingSheet->delete();

        return to_route('form.index')->with('success', '削除が成功しました');
    }
}
