import React, { useState } from "react";

const Modal = ({ isOpen, onClose }) => {
	return (
		<>
			{isOpen && (
				<div className="fixed inset-0 flex items-center justify-center z-50">
					<div className="fixed inset-0 bg-black opacity-50"></div>
					<div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg z-10">
						<div className="flex justify-end">
							<button
								className="text-gray-600 hover:text-gray-800"
								onClick={onClose}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
						<div className="mt-1">

						</div>
					</div>
				</div>
			)}
		</>
	);
};

const Moda = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div className="flex justify-center items-center ">
			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				onClick={openModal}
			>
				Open Modal
			</button>
			<Modal isOpen={isModalOpen} onClose={closeModal} />
		</div>
	);
};

export default Moda;
