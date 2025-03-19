import { Select, TextField, MenuItem } from "@mui/material";
import DateReserve from "@/components/DateReserve";
import Productcard from "@/components/Card";

export default function Bookings() {
    return (
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-2xl font-normal text-center text-gray-800 mb-6">Event Booking</h1>
                <form className="grid gap-6">
                    <div>
                        <TextField
                            label="Name-Lastname"
                            name="Name-Lastname"
                            fullWidth
                            className="mb-4 rounded-lg"
                            variant="standard"
                        />
                    </div>
                    <div>
                        <TextField
                            label="Contact-Number"
                            name="Contact-Number"
                            fullWidth
                            className="mb-4 rounded-lg"
                            variant="standard"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="venue" className="mb-2 text-gray-700">Select Venue</label>
                        <Select
                            id="venue"
                            className="border-gray-300 rounded-lg shadow-sm"
                            variant="standard"
                        >
                            <MenuItem value="Bloom">
                                The Bloom Pavilion
                            </MenuItem>
                            <MenuItem value="Spark">
                               Spark Space
                            </MenuItem>
                            <MenuItem value="GrandTable">
                                The Grand Table
                            </MenuItem>
                        </Select>
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-2 text-gray-700">Event Date</label>
                        <DateReserve />
                    </div>
                    <div className="mt-6 text-center">
                        <button
                            name = "Book Venue"
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            Book Venue
                        </button>
                    </div>
                </form>
            </div>
    );
}